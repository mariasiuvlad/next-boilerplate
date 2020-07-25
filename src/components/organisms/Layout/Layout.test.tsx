import React from 'react'
import Layout from './Layout'
import ProvideAuth from '@context/auth'
import {LoginResponseMock} from '__mocks__'
import {render} from '@testing-library/react'
import {AuthState} from '@context/auth/state'

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
  const {container} = render(
    <ProvideAuth value={AuthState.Unauthenticated()}>
      <Layout>Mock Layout</Layout>
    </ProvideAuth>
  )
  expect(container.textContent).not.toContain('logout')
  expect(container.textContent).toContain('login')
  expect(container.textContent).toContain('Mock Layout')
})

test('renders correctly when logged in', () => {
  const {container} = render(
    <ProvideAuth value={AuthState.Authenticated(LoginResponseMock)}>
      <Layout>Mock Layout</Layout>
    </ProvideAuth>
  )
  expect(container.textContent).toContain('logout')
  expect(container.textContent).toContain('Mock Layout')
})
