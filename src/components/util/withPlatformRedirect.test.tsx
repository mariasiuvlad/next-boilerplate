import React from 'react'
import withPlatformRedirect from './withPlatformRedirect'
import Router from 'next/router'
import {LoginResponseMock} from '__mocks__'
import createAuthActions from '@context/auth/actions'
import ProvideAuth, {authStateFactory, withProvideAuth} from '@context/auth'
import {render} from '@testing-library/react'

jest.mock('next/router')
const mockRouterReplace = (Router.replace as jest.Mock).mockImplementationOnce(jest.fn())

jest.mock('@context/auth/actions')
const mockCreateAuthActions = createAuthActions as jest.Mock
const mockAuthActions = {
  login: jest.fn(),
  signup: jest.fn(),
  logout: jest.fn(),
  refresh: jest.fn(),
}

mockCreateAuthActions.mockImplementation(() => mockAuthActions)

const MockedComponent = () => <div>Mock</div>
const WithPlatformRedirect = withPlatformRedirect(MockedComponent)

test('it calls refresh if not initialized', async () => {
  const Component = withProvideAuth(withPlatformRedirect(MockedComponent))
  const {container} = render(<Component />)

  expect(container.textContent).toBe('loading...')
  expect(mockAuthActions.refresh).toHaveBeenCalledTimes(1)
})

test('it renders component if not logged in', async () => {
  const {container} = render(
    <ProvideAuth value={authStateFactory(null, true)}>
      <WithPlatformRedirect />
    </ProvideAuth>
  )

  expect(container.textContent).toBe('Mock')
})

test('it redirects if logged in', async () => {
  const {container} = render(
    <ProvideAuth value={authStateFactory(LoginResponseMock, true)}>
      <WithPlatformRedirect />
    </ProvideAuth>
  )
  expect(container.textContent).toBe('loading...')
  expect(mockRouterReplace).toHaveBeenCalledTimes(1)
})
