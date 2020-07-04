import {LoginResponseMock} from '__mocks__'
import ActionCreators from '../actionCreators'
import * as AuthAPI from '@lib/api/auth'
import {
  LoginStart,
  LoginSuccess,
  LoginError,
  RefreshStart,
  RegisterError,
} from '../actions'
import {AxiosError} from 'axios'

jest.mock('@lib/api/auth')
let mockLogin = AuthAPI.login as jest.Mock
let mockRefresh = AuthAPI.refresh as jest.Mock
let mockLogout = AuthAPI.logout as jest.Mock
let mockSignup = AuthAPI.signup as jest.Mock
let mockDispatch = jest.fn()

const mockError = new Error('<Mock Error>') as AxiosError

afterEach(() => {
  jest.clearAllMocks()
})

test('successful login works', async () => {
  mockLogin.mockImplementationOnce(() => Promise.resolve(LoginResponseMock))

  let actionCreators = ActionCreators(mockDispatch)

  let promise = actionCreators.login('email', 'password')
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(LoginStart())
  await promise
  expect(mockDispatch).toHaveBeenCalledTimes(2)
  expect(mockDispatch).toHaveBeenCalledWith(LoginSuccess(LoginResponseMock))
})

test('failed login works', async () => {
  mockLogin.mockImplementationOnce(() => Promise.reject(mockError))

  let actionCreators = ActionCreators(mockDispatch)

  let promise = actionCreators.login('email', 'password')
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(LoginStart())
  try {
    await promise
  } catch (e) {
    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith(LoginError(mockError))
  }
})

test('successful refresh works', async () => {
  mockRefresh.mockImplementationOnce(() =>
    Promise.resolve({token: LoginResponseMock})
  )

  let actionCreators = ActionCreators(mockDispatch)

  let promise = actionCreators.refresh()
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(RefreshStart())
  await promise
  expect(mockDispatch).toHaveBeenCalledTimes(2)
  expect(mockDispatch).toHaveBeenCalledWith(LoginSuccess(LoginResponseMock))
})

test('failed refresh works', async () => {
  mockRefresh.mockImplementationOnce(() => Promise.reject(mockError))

  let actionCreators = ActionCreators(mockDispatch)

  let promise = actionCreators.refresh()
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(RefreshStart())
  try {
    await promise
  } catch (e) {
    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith(LoginError(mockError))
  }
})

test('logout works', async () => {
  mockLogout.mockImplementationOnce(() => Promise.resolve())

  let actionCreators = ActionCreators(mockDispatch)

  await actionCreators.logout()
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockLogout).toHaveBeenCalledTimes(1)
})

test('register works', async () => {
  mockSignup.mockImplementationOnce(() => Promise.resolve())
  mockLogin.mockImplementationOnce(() => Promise.resolve())
  let actionCreators = ActionCreators(mockDispatch)

  await actionCreators.signup('email', 'password')
  expect(mockSignup).toHaveBeenCalledWith({
    email: 'email',
    password: 'password',
  })
  expect(mockLogin).toHaveBeenCalledWith({
    email: 'email',
    password: 'password',
  })
})

test('register handles error', async () => {
  mockSignup.mockImplementationOnce(() => Promise.reject(mockError))
  let actionCreators = ActionCreators(mockDispatch)

  try {
    await actionCreators.signup('email', 'password')
  } catch (error) {
    expect(mockSignup).toHaveBeenCalledWith({
      email: 'email',
      password: 'password',
    })
    expect(mockDispatch).toHaveBeenCalledWith(RegisterError(mockError))
  }
  expect(mockLogin).not.toBeCalled()
})
