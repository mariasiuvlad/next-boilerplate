import React from 'react'
import Router from 'next/router'
import ProvideAuth from '@context/auth'
import {render} from '@testing-library/react'
import createAuthActions from '@context/auth/actions'
import {LoginResponseMock} from '__mocks__'
import PrivateRoute from './PrivateRoute'
import {AuthState} from '@context/auth/state'

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

const MockedComponent = () => <PrivateRoute render={() => <div>Mock</div>} />
const WithLogin = MockedComponent

test('it calls refresh if not initialized', async () => {
  const {container} = render(
    <ProvideAuth>
      <PrivateRoute render={() => <div>Mock</div>} />
    </ProvideAuth>
  )

  expect(container.textContent).toBe('')
  expect(mockAuthActions.refresh).toHaveBeenCalledTimes(1)
})

test('it redirects if not logged in', async () => {
  const {container} = render(
    <ProvideAuth value={AuthState.Unauthenticated()}>
      <WithLogin />
    </ProvideAuth>
  )

  expect(container.textContent).toBe('')
  expect(mockRouterReplace).toHaveBeenCalledTimes(1)
})

test('it renders component if logged in', async () => {
  const {container} = render(
    <ProvideAuth value={AuthState.Authenticated(LoginResponseMock)}>
      <WithLogin />
    </ProvideAuth>
  )
  expect(container.textContent).toBe('Mock')
})
