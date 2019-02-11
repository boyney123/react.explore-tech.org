import React from 'react'
import { shallow } from 'enzyme'

import Template from './'

const graphResult = {
  markdownRemark: {
    fields: {
      slug: '/random',
    },
    author_avatar: {
      childImageSharp: {
        fluid: '1',
      },
    },
    html: '<div>test</div>',
    frontmatter: {
      path: '/',
      img: {},
      img: {
        childImageSharp: {
          fluid: '1',
        },
      },
      material: {
        author: {
          name: 'David',
        },
        title: 'Random',
        subtitle: 'Random item on the website',
        url: 'https://www.test.co.uk',
        tags: ['random', 'test'],
        stargazers_count: 1000,
        subscribers_count: 1000,
        github_url: 'https://www.github.com/boyney123/testing',
        clone_url: 'https://www.github.com/boyney123/testing',
        ssh_url: 'https://www.github.com/boyney123/testing',
        pushed_at: '20-12-2000',
        latestRelease: {
          tag_name: '1.0',
          name: '8.0',
        },
      },
    },
  },
}

describe('Material Page', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Template data={graphResult} />)
    expect(wrapper).toMatchSnapshot()
  })
})
