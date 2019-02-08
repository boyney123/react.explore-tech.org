import React from 'react'
import { shallow } from 'enzyme'

import SiteHeader from './'

describe('SiteHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SiteHeader count="1" />)
    expect(wrapper).toMatchSnapshot()
  })
})
