import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

import Header from '../../components/Header'

import './styles.css'

export default function Template({ data, ...test }) {
  const { markdownRemark: post } = data
  const { frontmatter, author_avatar } = post
  const { title, material, img } = frontmatter

  const {
    subtitle,
    url,
    author: { name, avatar, github_url: author_github_url } = {},
    tags = [],
    github_url = '',
    stargazers_count,
    subscribers_count,
    pushed_at,
    latestRelease = {},
  } = material

  const {
    tag_name,
    url: release_url,
    name: release_name,
    created_at: release_creation_date,
  } = latestRelease

  // FIX THIS!
  const HeaderProps = {
    ...frontmatter,
    ...material,
    subtitle: `by ${name}`,
  }

  return (
    <Layout header={<Header {...HeaderProps} />}>
      <Helmet title={`react.openlist.io - ${frontmatter.title}`}>
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
        <div className="material">
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="side-bar">
                <div className="side-bar-item">
                  <Img fluid={author_avatar.childImageSharp.fluid} />
                  <p>
                    Developed by{' '}
                    <a
                      href={author_github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </a>
                  </p>
                </div>

                <div className="side-bar-item">
                  <h5>Website</h5>
                  <p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </p>
                </div>

                <div className="side-bar-item">
                  <h5>Repository</h5>

                  <p>
                    <a
                      href={github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {github_url}
                    </a>
                  </p>

                  {stargazers_count && (
                    <p>
                      <i className="far fa-star" /> Star: {stargazers_count}
                    </p>
                  )}
                  {subscribers_count && (
                    <p>
                      <i className="far fa-eye" /> Watchers: {subscribers_count}
                    </p>
                  )}
                  {pushed_at && (
                    <div>
                      <strong>Last Commit</strong> <p>{pushed_at}</p>
                    </div>
                  )}
                </div>

                {release_creation_date && (
                  <div className="side-bar-item">
                    <h5>Latest Release</h5>
                    <p>
                      <a
                        href={release_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-tag" /> {release_name || tag_name}
                      </a>
                    </p>
                    <p>
                      <i className="far fa-calendar" /> Created on{' '}
                      {release_creation_date}
                    </p>
                  </div>
                )}
                {tags.length > 0 && (
                  <div>
                    <h5>Keywords </h5>
                    <p className="is-size-6 tags">
                      {tags.map(tag => (
                        <span className="side-bar-item__tag">{tag}</span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="column pt0 material__container">
              <h1 className="is-size-1">{title}</h1>

              <p className="is-size-4">{subtitle}</p>

              <div className="material__body">
                <Img
                  className="material__screenshot"
                  fluid={img.childImageSharp.fluid}
                />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      author_avatar {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      html
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
            avatar
            github_url
          }
          title
          subtitle
          url
          github_url
          stargazers_count
          subscribers_count
          tags
          clone_url
          ssh_url
          pushed_at(formatString: "MMMM Do YYYY")
          latestRelease {
            tag_name
            name
            url
            created_at(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  }
`
