import React from 'react'
import urljoin from 'url-join'
import { navigate } from 'gatsby'

import './styles.css'

const ActionCard = ({
  path,
  title,
  author,
  subtitle,
  github_url,
  image,
} = {}) => {
  const urlParts = github_url.split('github.com')
  const repoPath = urlParts[urlParts.length - 1]

  console.log(image)

  const starBadgeUrl = `${urljoin(
    'https://img.shields.io/github/stars',
    repoPath
  )}.svg?style=social`

  return (
    <div className="action-card__container column is-one-third">
      <div className="browser2" onClick={() => navigate(path)}>
        <div className="header">
          <div className="dots">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
          </div>
          {/* <div class="address-bar">
            <input type="text" value={github_url} />
          </div> */}
        </div>
        <div className="body">
          <img src={image} />
        </div>
        <div className="browser2__footer">
          <h4 className="mp0">{title}</h4>
          <p> by {author}</p>
        </div>
      </div>
    </div>
    // <div className="action-card__container column is-one-third">
    //   <div className="action-cards mt20" onClick={() => navigate(path)}>
    //     {/* <div className="action-card-icon">
    //       <img
    //         src="https://github.githubassets.com/images/modules/site/features/action-build.svg"
    //         alt="Build"
    //         className="position-relative"
    //       />
    //     </div> */}
    //     <div className="action-card_s_header">
    //       {/* <h4 className="has-text-centered">
    //         {title} by {author}
    //         {/* <img src={starBadgeUrl} /> */}
    //       {/* </h4>  */}
    //       {/* <p>by {author}</p> */}

    //       {/* <p>{subtitle}</p> */}
    //     </div>
    //     <div className="action-card__body">
    //       <div className="browser">
    //         <div className="controls">•••</div>
    //       </div>
    //       <img src={image} />
    //       <div className="action-card__footer has-text-centered">
    //         <h4>{title} </h4>

    //         <p> by {author}</p>
    //       </div>
    //     </div>
    //     {/* <div className="action-cards__footer">
    //       <img src={starBadgeUrl} />
    //       <span>Read more</span>
    //     </div> */}
    //   </div>
    // </div>
  )
}

export default ActionCard
