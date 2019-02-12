import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Category from '../components/Category'
import SiteHeader from '../components/SiteHeader'

import 'bulma/css/bulma.css'

const IndexPage = props => {
  const { data: { allMarkdownRemark: { edges = [] } = {} } = {} } = props

  // Get a unique list of categories, I think we can do this with GraphQL Query?
  const categories = edges
    .map(item => {
      const { node } = item
      const {
        fields: { category },
      } = node
      return category
    })
    .filter((category, index, self) => {
      return self.indexOf(category) === index
    })

  return (
    <Layout header={<SiteHeader count={edges.length} />}>
      <div className="container is-fluid">
        <h1 className="container-title has-text-centered">Categories</h1>
        <div className="columns is-multiline">
          {categories.map(item => {
            return <Category key={item} name={item} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query CategoryIndex {
    allMarkdownRemark(sort: { order: ASC, fields: [fields___category] }) {
      edges {
        node {
          fields {
            category
          }
        }
      }
    }
  }
`
