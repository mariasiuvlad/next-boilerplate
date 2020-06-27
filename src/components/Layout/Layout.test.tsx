import React from 'react'
import {mount} from 'enzyme'
import Layout from './Layout'
import {AuthActionsContext} from '@context/auth'

const mockAuthActions = {
  logout: () => {},
  login: (email, password) => {},
  register: (email, password) => {},
  refresh: () => {},
}

test('renders correctly', () => {
  const wrapper = mount(
    <AuthActionsContext.Provider value={mockAuthActions}>
      <Layout>Mock Layout</Layout>
    </AuthActionsContext.Provider>
  )
  // renders logout button
  expect(wrapper.find('main').text()).toBe('Mock Layout')
})
