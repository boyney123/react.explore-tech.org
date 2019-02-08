import React from 'react'
import { shallow } from 'enzyme'

import Header from './'

describe('Header', () => {
  it('renders correctly with the given title and subtitle', () => {
    const wrapper = shallow(<Header title="Title" subtitle="Subtitle" />)
    expect(wrapper).toMatchSnapshot()
  })
})
