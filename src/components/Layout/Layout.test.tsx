import React from 'react'
import {mount} from 'enzyme'
import Layout from './Layout'
import {AuthActionsContext} from '@context/auth'
import {mockAuthActions} from '__mocks__'

test('renders correctly', () => {
  const wrapper = mount(
    <AuthActionsContext.Provider value={mockAuthActions}>
      <Layout>Mock Layout</Layout>
    </AuthActionsContext.Provider>
  )
  // renders logout button
  expect(wrapper.find('main').text()).toBe('Mock Layout')
})
