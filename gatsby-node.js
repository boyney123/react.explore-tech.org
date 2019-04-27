const path = require('path')

const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)

const getSlugParents = slug => {
  const slugParentString = slug.substring(1, slug.length - 1)
  return slugParentString.split('/')
}

const toTitleCase = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

exports.onCreateNode = async ({
  node,
  getNode,
  boundActionCreators,
  createContentDigest,
  store,
  cache,
}) => {
  const { createNodeField, createNode } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    const slugParentsArr = getSlugParents(slug)

    createNodeField({
      node,
      name: 'category',
      value: toTitleCase(slugParentsArr[0]),
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    // This code moves the GitHub avatars locally, so we can load better for the web xoxo
    if (node.frontmatter) {
      const fileNode = await createRemoteFileNode({
        url: node.frontmatter.material.author.avatar,
        store,
        cache,
        createNode,
        createNodeId: createContentDigest,
      })

      if (fileNode) {
        const fileNodeLink = `author_avatar___NODE`
        node[fileNodeLink] = fileNode.id
      }
    }
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/material-page/index.js`)
  const categoryTemplate = path.resolve(`src/templates/category-page/index.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              category
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const categories = result.data.allMarkdownRemark.edges.reduce((acc, { node: { fields: { category }}}) => ({
      ...acc,
      [category]: acc.hasOwnProperty(category) ? acc[category] + 1 : 1
    }), {})
    const postsPerPage = 9
    for (let cat in categories) {
      const numPages = Math.ceil(categories[cat] / postsPerPage)
      for (let i of Array(numPages).keys()) {
        createPage({
          path: i === 0 ? `/${cat}` : `/${cat}/${i + 1}`,
          component: categoryTemplate,
          context: {
            category: cat,
            skip: i * postsPerPage,
            limit: postsPerPage,
            numPages,
            currentPage: i + 1
          }
        })
      }
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const {
        fields: { category, slug } = {},
        frontmatter: { path: pathToMaterial } = {},
      } = node

      const url = path.join('/', category.toLowerCase(), pathToMaterial)

      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          path: slug,
        },
      })
    })
  })
}
