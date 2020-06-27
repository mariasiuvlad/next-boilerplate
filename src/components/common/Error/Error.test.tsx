import React from 'react'
import {mount} from 'enzyme'
import Error from './Error'

test('renders the error', () => {
  const wrapper = mount(<Error error={{message: '<Error message>'}} />)
  // renders logout button
  expect(wrapper.find('pre').text()).toBe(
    JSON.stringify({message: '<Error message>'})
  )
})
