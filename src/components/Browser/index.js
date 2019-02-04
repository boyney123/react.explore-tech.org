import React from 'react'
import urljoin from 'url-join'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'

import './styles.css'

const Browser = ({ path, title, author, subtitle, github_url, image } = {}) => {
  const urlParts = github_url.split('github.com')
  const repoPath = urlParts[urlParts.length - 1]

  console.log(image)

  const starBadgeUrl = `${urljoin(
    'https://img.shields.io/github/stars',
    repoPath
  )}.svg?style=social`

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
          <img src={image} />
        </div>
        <div className="browser__footer">
          <h4 className="mp0">{title}</h4>
          <p> by {author}</p>
        </div>
      </div>
    </div>
  )
}

export default Browser
