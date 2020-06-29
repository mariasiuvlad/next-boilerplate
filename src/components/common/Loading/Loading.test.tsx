import React from 'react'
import {mount} from 'enzyme'
import Loading from './Loading'

test('renders loading message', () => {
  const wrapper = mount(<Loading />)
  // renders logout button
  expect(wrapper.text()).toBe('loading...')
})
