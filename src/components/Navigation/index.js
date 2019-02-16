import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const Navigation = () => {
  return (
    <nav
      className="nav is-clearfix"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="is-pulled-left site-brand">
        <Link to="/">react.explore-tech.org</Link>
      </div>
      <div>
        <a
          className="is-pulled-right"
          href="https://github.com/boyney123/react.explore-tech.org"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}

export default Navigation
