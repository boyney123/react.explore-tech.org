import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <section className="main hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        </div>
      </div>
    </section>
  )
}

export default Header
