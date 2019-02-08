import React from 'react'
import { shallow } from 'enzyme'

import Template from './'

describe('Template', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Template />)
    expect(wrapper).toMatchSnapshot()
  })

  // it('lists all the given materials', () => {})

  // descirbe('ordering', () => {
  //   it('selecting to order by `name` re-renders the list of materials ordered by name', () => {})
  //   it('selecting to order by `stars high to low` re-renders the list of materials ordered by the number of GitHub Stars', () => {})
  // })

  // t('')
})
