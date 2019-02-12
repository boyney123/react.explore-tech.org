import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/">react.explore-tech.org</Link>
        {/* <a class="navbar-item" href="/"> */}
        {/* react.explore-tech.org */}
        {/* </a> */}
      </div>
    </nav>
  )
}

export default Navigation
