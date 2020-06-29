import {LoginResponseMock} from '__mocks__'
import ActionCreators from '../actionCreators'
import * as AuthAPI from '@lib/api/auth'
import {
  TAction,
  LoginStart,
  LoginSuccess,
  LoginError,
  RefreshStart,
} from '../actions'
import {AxiosError} from 'axios'

jest.mock('@lib/api/auth')
let mockLogin = AuthAPI.login as jest.Mock
let mockRefresh = AuthAPI.refresh as jest.Mock
let mockLogout = AuthAPI.logout as jest.Mock
let mockRegister = AuthAPI.register as jest.Mock

const mockError = new Error('<Mock Error>') as AxiosError

afterEach(() => {
  jest.clearAllMocks()
})

test('successful login works', async () => {
  let mockDispatch = jest.fn((action: TAction) => {})
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
  let mockDispatch = jest.fn((action: TAction) => {})
  mockLogin.mockImplementationOnce(() => Promise.reject(mockError))

  let actionCreators = ActionCreators(mockDispatch)

  let promise = actionCreators.login('email', 'password')
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(LoginStart())
  await promise
  expect(mockDispatch).toHaveBeenCalledTimes(2)
  expect(mockDispatch).toHaveBeenCalledWith(LoginError(mockError))
})

test('successful refresh works', async () => {
  let mockDispatch = jest.fn((action: TAction) => {})
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
  let mockDispatch = jest.fn((action: TAction) => {})
  mockRefresh.mockImplementationOnce(() => Promise.reject(mockError))

  let actionCreators = ActionCreators(mockDispatch)

  let promise = actionCreators.refresh()
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(RefreshStart())
  await promise
  expect(mockDispatch).toHaveBeenCalledTimes(2)
  expect(mockDispatch).toHaveBeenCalledWith(LoginError(mockError))
})

test('logout works', async () => {
  let mockDispatch = jest.fn((action: TAction) => {})
  mockLogout.mockImplementationOnce(() => Promise.resolve())

  let actionCreators = ActionCreators(mockDispatch)

  await actionCreators.logout()
  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(mockLogout).toHaveBeenCalledTimes(1)
})

test('register works', async () => {
  let mockDispatch = jest.fn((action: TAction) => {})
  mockRegister.mockImplementationOnce(() => Promise.resolve())
  let actionCreators = ActionCreators(mockDispatch)

  await actionCreators.register('email', 'password')
  expect(mockRegister).toHaveBeenCalledWith({
    email: 'email',
    password: 'password',
  })
})
