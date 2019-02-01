import React, { Component } from 'react'
import { navigate, graphql } from 'gatsby'
import urljoin from 'url-join'

import Fuse from 'fuse.js'

import Layout from '../components/layout'
import ActionCard from '../components/Action-Card'
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
    const {
      data: { allMarkdownRemark: { edges = [] } = {} } = {},
      test,
    } = this.props

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
      <Layout
        header={
          <SiteHeader
            // handleFilter={this.handleFilter.bind(this)}
            count={edges.length}
          />
        }
      >
        <div className="container is-fluid">
          {/* <div className="has-text-centered">
          <h1 >All things React</h1>
          <p className="is-size-4">If you are looking for some awesome React content you have come to the right place. Here we collect and share React content to help developers learn & explore React.</p>
          <hr/>
        </div> */}

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
