import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Fuse from 'fuse.js'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Browser from '../../components/Browser'

import 'bulma/css/bulma.css'

import './styles.css'
import '../material-page/styles.css'

export default function Template({ data = {}, pageContext = {} }) {
  const { category } = pageContext

  const { allMarkdownRemark: { edges = [] } = {} } = data

  const items = edges.map(item => {
    const { node } = item
    const {
      frontmatter: { material, ...restOfFrontMatter },
      fields,
    } = node
    return {
      ...restOfFrontMatter,
      ...material,
      ...fields,
    }
  })

  const allMaterialTagCount = {}
  items.forEach(({ tags = [] }) => {
    tags.forEach(tag => {
      if (allMaterialTagCount[tag]) {
        allMaterialTagCount[tag] = allMaterialTagCount[tag] + 1
      } else {
        allMaterialTagCount[tag] = 1
      }
    })
  })

  // TODO: Tidy up sorted tags....
  const sortedTags = []
  for (var item in allMaterialTagCount) {
    if (item) {
      sortedTags.push([item, allMaterialTagCount[item]])
    }
  }

  sortedTags.sort(function(a, b) {
    return b[1] - a[1]
  })

  const fuse = new Fuse(items, {
    keys: ['title', 'tags'],
    shouldSort: true,
    threshold: 0.3,
  })

  const [materials, setMaterials] = useState(items)

  const handleFilter = event => {
    const { target: { value } = {} } = event
    const results = value !== '' ? fuse.search(value) : items
    setMaterials(results)
  }

  // Sort by stars, can we do this with GraphQL?
  const orderedRepos = materials.sort((item1, item2) => {
    return item2['stargazers_count'] - item1['stargazers_count']
  })

  return (
    <Layout
      className="blog-post-container"
      header={
        <Header title={category} subtitle="react.explore-tech.org" contribute />
      }
    >
      <Helmet title={`react.explore-tech.org`}>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
          crossorigin="anonymous"
        />
        <html lang="en" />
      </Helmet>
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter category-side-bar">
            <input
              className="category-side-bar__search"
              placeHolder="Filter by name, tags, etc..."
              onChange={handleFilter}
            />
            <h5 className="category-side-bar__tags__title mt20">Tags</h5>
            <ul className="category-side-bar__tags">
              {sortedTags.map(tag => {
                return (
                  <li className="category-side-bar__tag">
                    {tag[0]} <span>{tag[1]}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="column pt0">
            <div className="columns is-multiline">
              {orderedRepos.length === 0 && (
                <h4 className="no-materials-found">No material found</h4>
              )}

              {orderedRepos.map(item => {
                const {
                  title,
                  subtitle,
                  author: { name } = {},
                  github_url,
                  img,
                  slug,
                } = item

                return (
                  <Browser
                    path={slug}
                    title={title}
                    author={name}
                    subtitle={subtitle}
                    github_url={github_url}
                    image={img}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MaterialsByCategory($category: String!) {
    allMarkdownRemark(filter: { fields: { category: { eq: $category } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            path
            img {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            material {
              author {
                name
              }
              title
              subtitle
              url
              tags
              stargazers_count
              subscribers_count
              github_url
            }
          }
        }
      }
    }
  }
`
