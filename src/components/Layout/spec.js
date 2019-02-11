import React from 'react'
import { shallow } from 'enzyme'

import Layout from './'

describe('Layout', () => {
  it('renders correctly with the given title and subtitle', () => {
    const wrapper = shallow(
      <Layout count="2" header={<div>Test</div>}>
        <h1>test</h1>
      </Layout>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
