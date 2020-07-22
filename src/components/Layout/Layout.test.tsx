import React from 'react'
import {mount} from 'enzyme'
import Layout from './Layout'
import ProvideAuth, {authStateFactory} from '@context/auth'
import {LoginResponseMock} from '__mocks__'

jest.mock('next/link', () => {
  return ({children}) => {
    return children
  }
})

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '<pathname>',
  }),
}))

test('renders correctly when logged out', () => {
  const wrapper = mount(
    <ProvideAuth>
      <Layout>Mock Layout</Layout>
    </ProvideAuth>
  )
  // renders logout button
  expect(wrapper.find('main').text()).toBe('Mock Layout')
})

test('renders correctly when logged in', () => {
  const wrapper = mount(
    <ProvideAuth value={authStateFactory(LoginResponseMock, true)}>
      <Layout>Mock Layout</Layout>
    </ProvideAuth>
  )
  // renders logout button
  expect(wrapper.find('main').text()).toBe('Mock Layout')
})
