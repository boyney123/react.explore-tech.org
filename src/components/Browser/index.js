import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'

import './styles.css'

const Browser = ({
  path,
  title,
  author,
  subtitle,
  github_url,
  image = {},
} = {}) => {
  const { childImageSharp: { fluid: screenshot } = {} } = image

  return (
    <div className="column is-one-third">
      <div className="browser" onClick={() => navigate(path)}>
        <div className="browser__header">
          <div className="browser__header__dots">
            <span className="browser__header__dots__dot" />
            <span className="browser__header__dots__dot" />
            <span className="browser__header__dots__dot" />
          </div>
        </div>
        <div className="browser__body">
          <Img fluid={screenshot} />
        </div>
        <div className="browser__footer">
          <h4 className="mp0">{title}</h4>
          <p> by {author}</p>
        </div>
      </div>
    </div>
  )
}

Browser.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  subtitle: PropTypes.string,
  github_url: PropTypes.string,
  image: PropTypes.object,
}

export default Browser
