import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Category from '../components/Category'
import SiteHeader from '../components/SiteHeader'

class IndexPage extends Component {
  state = {
    filter: '',
  }

  handleFilter(event) {
    const value = event.target.value
    this.setState({ filter: value })
  }

  render() {
    const { data: { allMarkdownRemark: { edges = [] } = {} } = {} } = this.props

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
          <div className="columns is-multiline">
            {categories.map(item => {
              return <Category name={item} />
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query CategoryIndex {
    allMarkdownRemark {
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
