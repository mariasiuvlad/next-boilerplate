import React from 'react'
import {mount} from 'enzyme'
import withPlatformRedirect from './withPlatformRedirect'
import {AuthContext, AuthActionsContext} from '@context/auth'
import initialState from '@context/auth/initialState'
import Router from 'next/router'

jest.mock('next/router')
const mockRouterReplace = (Router.replace as jest.Mock).mockImplementationOnce(
  jest.fn()
)

const mockAuthActions = {
  logout: () => {},
  login: (email, password) => {},
  register: (email, password) => {},
  refresh: jest.fn(),
}

const MockedComponent = () => <div>Mock</div>
const WithPlatformRedirect = withPlatformRedirect(MockedComponent)

const Wrapper = ({children, initialState}) => (
  <AuthContext.Provider value={initialState}>
    <AuthActionsContext.Provider value={mockAuthActions}>
      {children}
    </AuthActionsContext.Provider>
  </AuthContext.Provider>
)

test('it calls refresh if not initialized', async () => {
  const wrapper = mount(
    <Wrapper initialState={initialState()}>
      <WithPlatformRedirect />
    </Wrapper>
  )

  expect(wrapper.text()).toBe('loading...')
  expect(mockAuthActions.refresh).toHaveBeenCalledTimes(1)
})

test('it renders component if not logged in', async () => {
  const wrapper = mount(
    <Wrapper initialState={initialState(null, true)}>
      <WithPlatformRedirect />
    </Wrapper>
  )

  expect(wrapper.text()).toBe('Mock')
})

test('it redirects if logged in', async () => {
  const wrapper = mount(
    <Wrapper
      initialState={initialState(
        {jwt_token: '<Mock JWTToken>', jwt_expires_in: 1},
        true
      )}
    >
      <WithPlatformRedirect />
    </Wrapper>
  )
  expect(wrapper.text()).toBe('loading...')
  expect(mockRouterReplace).toHaveBeenCalledTimes(1)
})
