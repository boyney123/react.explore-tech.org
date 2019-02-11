import React from 'react'
import { shallow } from 'enzyme'

import Template from './'

const graphResult = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          fields: {
            slug: '/random',
          },
          frontmatter: {
            path: '/',
            img: {},
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
            },
          },
        },
      },
      {
        node: {
          fields: {
            slug: '/random-2',
          },
          frontmatter: {
            path: '/random-2',
            img: {},
            material: {
              author: {
                name: 'David',
              },
              title: 'New Title 2',
              subtitle: 'Another Random item on the website',
              url: 'https://www.test-2.co.uk',
              tags: ['random', 'test'],
              stargazers_count: 1000,
              subscribers_count: 1000,
              github_url: 'https://www.github.com/boyney123/testing',
            },
          },
        },
      },
    ],
  },
}

describe('Template', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Template data={graphResult} />)
    expect(wrapper).toMatchSnapshot()
  })
})
