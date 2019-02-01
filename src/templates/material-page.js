import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import urljoin from 'url-join'

import Layout from '../components/layout'
import ActionHeader from '../components/ActionHeader'

import './material-page.css'

export default function Template({ data, ...test }) {
  console.log('DATA', data, test)

  const { markdownRemark: post } = data
  const { frontmatter } = post
  const { title, subtitle, url, twitter, path, author, tags = [] } = frontmatter

  const creator = twitter ? twitter : author

  const urlParts = url.split('github.com')
  const repoPath = urlParts[urlParts.length - 1]
  const starBadgeUrl = `${urljoin(
    'https://img.shields.io/github/stars',
    repoPath
  )}.svg?style=social`

  const tweet = encodeURIComponent(
    `Check out this GitHub action: ${title} from ${creator}: https://react-openlist.netlify.com/${path} 👍 #github`
  )

  return (
    <Layout
      className="blog-post-container"
      header={<ActionHeader {...frontmatter} />}
    >
      <Helmet title={`react.openlist.io - ${frontmatter.title}`}>
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
      <div className="blog-post container">
        <a className="back-button button" href="/">
          <i class="fas fa-arrow-left" /> Back
        </a>
        <hr />
        <h1>{title}</h1>
        <p className="is-size-6">{tags.join(', ')}</p>
        <img className="github-stars" src={starBadgeUrl} />
        <p>{subtitle}</p>

        <a href={`${url}`} target="_blank">
          {url}
        </a>

        <div className="mt20">
          <a
            className="button twitter-button"
            href={`https://twitter.com/intent/tweet?text=${tweet}`}
          >
            <i class="fab fa-twitter" /> Share this content
          </a>
        </div>

        <hr />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        path
        author
        title
        subtitle
        url
        tags
      }
    }
  }
`
