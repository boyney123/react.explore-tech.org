import React from 'react'
import { shallow } from 'enzyme'
import Page from './'

const graphResult = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          fields: {
            category: 'Libraries',
          },
        },
      },
      {
        node: {
          fields: {
            category: 'Components',
          },
        },
      },
    ],
  },
}

describe('All Categories Page', () => {
  it.only('should render a given list of categories', () => {
    const wrapper = shallow(<Page data={graphResult} />)
    expect(wrapper).toMatchSnapshot()
  })

  it.only('if the list of materials to render share a category the page only renders the category once (unique categories displayed)', () => {
    const duplicatedData = {
      ...graphResult,
    }

    duplicatedData.allMarkdownRemark.edges.push({
      node: {
        fields: {
          category: 'Libraries',
        },
      },
    })

    const wrapper = shallow(<Page data={duplicatedData} />)
    expect(wrapper.find('Category')).toHaveLength(2)
  })
})
