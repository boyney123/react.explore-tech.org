import React from 'react'
import { navigate } from 'gatsby'
import iconToCategoryMap from '../../utils/icon-to-category'
import genericIcon from '../../icons/circle.svg'
import './styles.css'
import { siteMetadata } from '../../../gatsby-config'

const Category = ({ name } = {}) => {
  const { subtitle } = siteMetadata.categories[name]
  const icon = iconToCategoryMap[name] || genericIcon

  return (
    <div className="category-container column is-one-third">
      <div className="category" onClick={() => navigate(name)}>
        <h2 className="title  has-text-centered">{name}</h2>
        <div className="category-image">
          <figure>
            <img src={icon} alt="icon" />
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
