import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import urljoin from 'url-join'

import Layout from '../components/layout'
import ActionHeader from '../components/ActionHeader'
import ActionCard from '../components/Action-Card'

import './category-page.css'

// Tidy this UP!
import './material-page.css'

export default function Template({ data, pageContext }) {
  const { category } = pageContext

  const { allMarkdownRemark: { edges = [] } = {} } = data

  const items = edges.map(item => {
    const { node } = item
    const { frontmatter, fields } = node
    return {
      ...frontmatter,
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

  console.log(allMaterialTagCount)

  return (
    <Layout
      className="blog-post-container"
      header={<ActionHeader title={category} author="react.openlist.io" />}
    >
      <Helmet title={`react.openlist.io`}>
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
        />
        <html lang="en" />
      </Helmet>
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter category-side-bar">
            <input placeHolder="Filter by name, tags, etc..." />
            <h5 className="mt20">Tags</h5>
            <ul className="category-side-bar__tags">
              {Object.keys(allMaterialTagCount).map(key => {
                return (
                  <li>
                    {key} <span>{allMaterialTagCount[key]}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="column pt0">
            <div className="columns is-multiline">
              {items.map(item => {
                const {
                  path,
                  title,
                  subtitle,
                  author,
                  github_url,
                  tags = [],
                  img,
                  slug,
                } = item

                console.log(item)

                const urlParts = github_url.split('github.com')
                const repoPath = urlParts[urlParts.length - 1]

                const starBadgeUrl = `${urljoin(
                  'https://img.shields.io/github/stars',
                  repoPath
                )}.svg?style=social`

                return (
                  <ActionCard
                    path={slug}
                    title={title}
                    author={author}
                    subtitle={subtitle}
                    github_url={github_url}
                    image={img.publicURL}
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
            author
            title
            subtitle
            url
            tags
            img {
              publicURL
            }
            github_url
          }
        }
      }
    }
  }
`
