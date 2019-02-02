import React from 'react'
import { navigate } from 'gatsby'
import siteConfig from '../../../siteConfig'
import './styles.css'

const Category = ({ name } = {}) => {
  const { icon, subtitle } = siteConfig.categories[name]

  return (
    <div className="card-container column is-one-third">
      <div className="card" onClick={() => navigate(name)}>
        <h2 className="title  has-text-centered">{name}</h2>
        <div className="card-image">
          <figure>
            <img src={icon} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
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
