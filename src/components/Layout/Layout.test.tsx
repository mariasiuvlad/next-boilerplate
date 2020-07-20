import React from 'react'
import {mount} from 'enzyme'
import Layout from './Layout'
import ProvideAuth from '@context/auth'

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

test('renders correctly', () => {
  const wrapper = mount(
    <ProvideAuth>
      <Layout>Mock Layout</Layout>
    </ProvideAuth>
  )
  // renders logout button
  expect(wrapper.find('main').text()).toBe('Mock Layout')
})
