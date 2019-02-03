import React from 'react'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="has-text-centered">
        <p>An open source list of React Tools.</p>

        <a class="text-gray-light" href="https://github.com/boyney123">
          Developed by David Boyne
        </a>
        <p className="mt10">
          <a
            href="https://twitter.com/boyney123?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-size="large"
            data-show-screen-name="false"
            data-show-count="false"
          >
            Follow @boyney123
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
