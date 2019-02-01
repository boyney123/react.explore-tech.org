import React from 'react'
import urljoin from 'url-join'

const ActionHeader = ({ title, github_url, author }) => {
  return (
    <section className="main hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>
          {author && <h2 className="subtitle">{author}</h2>}
        </div>
      </div>
    </section>
  )
}

export default ActionHeader
