import React from 'react'
import Header from './Header'
import ProvideAuth from '@context/auth'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import createAuthActions from '@context/auth/actions'

jest.mock('@context/auth/actions')
const mockCreateAuthActions = createAuthActions as jest.Mock
const mockAuthActions = {
  login: jest.fn(),
  signup: jest.fn(),
  logout: jest.fn(),
  refresh: jest.fn(),
}

mockCreateAuthActions.mockImplementation(() => mockAuthActions)

const logout = () => fireEvent.submit(screen.getByText('Logout'))

test('it renders a logout button', () => {
  const {getByText} = render(
    <ProvideAuth>
      <Header />
    </ProvideAuth>
  )
  // renders logout button
  expect(getByText('Logout')).not.toBe(undefined)
})

test('logout button works', () => {
  render(
    <ProvideAuth>
      <Header />
    </ProvideAuth>
  )
  // renders logout button
  logout()
  waitFor(() => expect(mockAuthActions.logout).toBeCalled())
})
