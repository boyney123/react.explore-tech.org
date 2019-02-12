import React from 'react'

import './styles.css'

const Header = ({ title, subtitle, contribute }) => {
  return (
    <section className="main hero section-header">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
          {contribute && (
            <a
              className="button is-medium"
              href="https://github.com/boyney123/react.explore-tech.org/blob/master/CONTRIBUTING.md#adding-a-material-to-the-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
              Contribute more {title.toLowerCase()}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Header
