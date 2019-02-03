import React from 'react'
import { navigate } from 'gatsby'
import siteConfig from '../../../siteConfig'
import './styles.css'

const Category = ({ name } = {}) => {
  const { icon, subtitle } = siteConfig.categories[name]

  return (
    <div className="category-container column is-one-third">
      <div className="category" onClick={() => navigate(name)}>
        <h2 className="title  has-text-centered">{name}</h2>
        <div className="category-image">
          <figure>
            <img src={icon} />
          </figure>
        </div>
        <div className="category-content">
          <div className="media">
            <div className="media-content">
              <p className="subtitle is-6">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
