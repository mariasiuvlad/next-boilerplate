import React from 'react'
import {mount} from 'enzyme'

test('Testing suite is set up correctly', () => {
  const wrapper = mount(<p>Hello Jest!</p>)
  expect(wrapper.text()).toMatch('Hello Jest!')
})
