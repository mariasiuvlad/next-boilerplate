import React from 'react'
import {mount} from 'enzyme'
import withLogin from './withLogin'
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
const WithLogin = withLogin(MockedComponent)

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
      <WithLogin />
    </Wrapper>
  )

  expect(wrapper.text()).toBe('loading...')
  expect(mockAuthActions.refresh).toHaveBeenCalledTimes(1)
})

test('it redirects if not logged in', async () => {
  const wrapper = mount(
    <Wrapper initialState={initialState(null, true)}>
      <WithLogin />
    </Wrapper>
  )

  expect(wrapper.text()).toBe('loading...')
  expect(mockRouterReplace).toHaveBeenCalledTimes(1)
})

test('it renders component if logged in', async () => {
  const wrapper = mount(
    <Wrapper
      initialState={initialState(
        {jwt_token: '<Mock JWTToken>', jwt_expires_in: 1},
        true
      )}
    >
      <WithLogin />
    </Wrapper>
  )
  expect(wrapper.text()).toBe('Mock')
})
