import React from 'react'
import {mount} from 'enzyme'
import UserCredentialsForm from './UserCredentialsForm'

test('renders correctly', () => {
  const wrapper = mount(
    <UserCredentialsForm register={() => {}} onSubmit={() => {}} type="login" />
  )
  // renders both inputs
  expect(wrapper.find('input').length).toBe(2)
})
