import React from 'react'
import SignupForm from './container'
import {mockAuthActions} from '__mocks__'
import {AuthActionsContext} from '@context/auth'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'

mockAuthActions.signup
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

const MockSignupForm = () => (
  <AuthActionsContext.Provider value={mockAuthActions}>
    <SignupForm />
  </AuthActionsContext.Provider>
)

beforeEach(() => {
  render(<MockSignupForm />)
})

afterEach(() => {
  mockAuthActions.signup.mockClear()
})

test('should display required error when value is invalid', async () => {
  submit()
  expect(await screen.findAllByRole('alert')).toHaveLength(2)
  expect(mockAuthActions.signup).not.toBeCalled()
})

test('should display matching error when email is invalid', async () => {
  setEmail('test')
  setPassword('Password12')
  submit()

  expect(await screen.findAllByRole('alert')).toHaveLength(1)
  expect(mockAuthActions.signup).not.toBeCalled()
  expect(getEmail()).toBe('test')
  expect(getPassword()).toBe('Password12')
})

test('should display min length error when password is invalid', async () => {
  setEmail('test@gmail.com')
  setPassword('pass')
  submit()

  expect(await screen.findAllByRole('alert')).toHaveLength(1)
  expect(mockAuthActions.signup).not.toBeCalled()
  expect(getEmail()).toBe('test@gmail.com')
  expect(getPassword()).toBe('pass')
})

test('should not display errors when form is valid', async () => {
  setEmail('test@gmail.com')
  setPassword('Password12')
  submit()

  await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0))
  expect(mockAuthActions.signup).toBeCalledWith('test@gmail.com', 'Password12')
  expect(getEmail()).toBe('')
  expect(getPassword()).toBe('')
})

test('should display signup errors when form is valid', async () => {
  setEmail('test@gmail.com')
  setPassword('Password12')
  submit()

  await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0))
  expect(mockAuthActions.signup).toBeCalledWith('test@gmail.com', 'Password12')
  await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1))
  expect(getEmail()).toBe('test@gmail.com')
  expect(getPassword()).toBe('Password12')
  expect(mockAuthActions.signup).toBeCalledWith('test@gmail.com', 'Password12')
})
