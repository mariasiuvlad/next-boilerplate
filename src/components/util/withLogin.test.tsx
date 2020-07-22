import React from 'react'
import withLogin from './withLogin'
import Router from 'next/router'
import ProvideAuth, {authStateFactory} from '@context/auth'
import {render} from '@testing-library/react'
import createAuthActions from '@context/auth/actions'
import {LoginResponseMock} from '__mocks__'

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
const WithLogin = withLogin(MockedComponent)

test('it calls refresh if not initialized', async () => {
  const {container} = render(
    <ProvideAuth>
      <WithLogin />
    </ProvideAuth>
  )

  expect(container.textContent).toBe('loading...')
  expect(mockAuthActions.refresh).toHaveBeenCalledTimes(1)
})

test('it redirects if not logged in', async () => {
  const {container} = render(
    <ProvideAuth value={authStateFactory(null, true)}>
      <WithLogin />
    </ProvideAuth>
  )

  expect(container.textContent).toBe('loading...')
  expect(mockRouterReplace).toHaveBeenCalledTimes(1)
})

test('it renders component if logged in', async () => {
  const {container} = render(
    <ProvideAuth value={authStateFactory(LoginResponseMock, true)}>
      <WithLogin />
    </ProvideAuth>
  )
  expect(container.textContent).toBe('Mock')
})
