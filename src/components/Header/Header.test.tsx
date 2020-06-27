import React from 'react'
import {mount} from 'enzyme'
import Header from './Header'
import {AuthActionsContext} from '@context/auth'

const mockAuthActions = {
  logout: () => {},
  login: (email, password) => {},
  register: (email, password) => {},
  refresh: () => {},
}

test('Testing suite is set up correctly', () => {
  const wrapper = mount(
    <AuthActionsContext.Provider value={mockAuthActions}>
      <Header />
    </AuthActionsContext.Provider>
  )
  // renders logout button
  expect(wrapper.find('button#logoutButton').text()).toBe('Logout')
})
