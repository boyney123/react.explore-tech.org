import React from 'react'
import { shallow } from 'enzyme'
import { navigate } from 'gatsby'
import { siteMetadata } from '../../../gatsby-config'

import Category from './'

const { categories } = siteMetadata

describe('Category', () => {
  for (const category in categories) {
    it(`when the name prop is set to "${category} is reads the siteConfig and uses the configured icon and subtitle`, () => {
      const wrapper = shallow(<Category name={category} />)
      expect(wrapper).toMatchSnapshot()
    })
  }

  it('when clicking on category the user is navigated to the name of the category', () => {
    const wrapper = shallow(<Category name="Components" />)
    wrapper.find('.category').simulate('click')
    expect(navigate).toHaveBeenCalledWith('Components')
  })
})
