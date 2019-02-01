const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

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

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    const slugParentsArr = getSlugParents(slug)

    console.log('slug', slug)

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
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/material-page.js`)
  const categoryTemplate = path.resolve(`src/templates/category-page.js`)

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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node)

      const {
        fields: { category, slug } = {},
        frontmatter: { path: pathToMaterial } = {},
      } = node

      //styles/markdown name....

      //stypes/{path in markdown}

      const url = path.join('/', category.toLowerCase(), pathToMaterial)

      console.log('CAT', category, slug)

      createPage({
        path: category,
        component: categoryTemplate,
        context: {
          category,
        },
      })

      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          path: slug,
        }, // additional data can be passed via context
      })
    })
  })
}
