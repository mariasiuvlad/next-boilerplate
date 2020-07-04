import React from 'react'
import LoginForm from './container'
import {mockAuthActions} from '__mocks__'
import {AuthActionsContext} from '@context/auth'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'

mockAuthActions.login
  .mockImplementationOnce(jest.fn(() => Promise.resolve()))
  .mockImplementationOnce(
    jest.fn(() => Promise.reject({message: 'api error message'}))
  )

const submit = () => fireEvent.submit(screen.getByRole('button'))
const getEmail = () =>
  (screen.getByRole('textbox', {
    name: /email/i,
  }) as HTMLInputElement).value
const getPassword = () =>
  (screen.getByLabelText('password') as HTMLInputElement).value
const setEmail = (value) =>
  fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {
    target: {value},
  })
const setPassword = (value) =>
  fireEvent.input(screen.getByLabelText('password'), {
    target: {value},
  })

const MockLoginForm = () => (
  <AuthActionsContext.Provider value={mockAuthActions}>
    <LoginForm />
  </AuthActionsContext.Provider>
)

beforeEach(() => {
  render(<MockLoginForm />)
})

afterEach(() => {
  mockAuthActions.login.mockClear()
})

test('should display required error when value is invalid', async () => {
  submit()
  expect(await screen.findAllByRole('alert')).toHaveLength(2)
  expect(mockAuthActions.login).not.toBeCalled()
})

test('should display matching error when email is invalid', async () => {
  setEmail('test')
  setPassword('Password12')
  submit()

  expect(await screen.findAllByRole('alert')).toHaveLength(1)
  expect(mockAuthActions.login).not.toBeCalled()
  expect(getEmail()).toBe('test')
  expect(getPassword()).toBe('Password12')
})

test('should display min length error when password is invalid', async () => {
  setEmail('test@gmail.com')
  setPassword('pass')
  submit()

  expect(await screen.findAllByRole('alert')).toHaveLength(1)
  expect(mockAuthActions.login).not.toBeCalled()
  expect(getEmail()).toBe('test@gmail.com')
  expect(getPassword()).toBe('pass')
})

test('should not display errors when form is valid', async () => {
  setEmail('test@gmail.com')
  setPassword('Password12')
  submit()

  await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0))
  expect(mockAuthActions.login).toBeCalledWith('test@gmail.com', 'Password12')
  expect(getEmail()).toBe('')
  expect(getPassword()).toBe('')
})

test('should display request errors if request fails', async () => {
  setEmail('test@gmail.com')
  setPassword('Password12')
  submit()
  await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1))
  expect(getEmail()).toBe('test@gmail.com')
  expect(getPassword()).toBe('Password12')
  expect(mockAuthActions.login).toBeCalled()
})
