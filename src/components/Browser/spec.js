import React from 'react'
import { shallow } from 'enzyme'
import { navigate } from 'gatsby'

import Browser from './'

describe('Browser', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Browser />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with the given gatsby childImageSharp fluid image', () => {
    const image = {
      childImageSharp: {
        fluid: { aspectRatio: 10, src: 'test.png', srcSet: '', sizes: '1' },
      },
    }

    const wrapper = shallow(<Browser image={image} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('shows the given title and author under the browser', () => {
    const wrapper = shallow(<Browser title="My new component" author="David" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('when clicking on the browser user is navigated to the components `path` prop', () => {
    const wrapper = shallow(<Browser path="/some-random-path" />)
    wrapper.find('.browser').simulate('click')
    expect(navigate).toHaveBeenCalledWith('/some-random-path')
  })
})
