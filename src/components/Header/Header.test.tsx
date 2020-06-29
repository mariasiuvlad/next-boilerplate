import React from 'react'
import {mount} from 'enzyme'
import Header from './Header'
import {withAuthProvider} from '__mocks__'

const Mocked = withAuthProvider(Header)

test('it renders a logout button', () => {
  const wrapper = mount(<Mocked />)
  // renders logout button
  expect(wrapper.find('button#logoutButton').text()).toBe('Logout')
})
