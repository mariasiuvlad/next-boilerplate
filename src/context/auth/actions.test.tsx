import createAuthActions from './actions'
import * as AuthAPI from '@lib/api/auth'
import {LoginResponseMock} from '__mocks__'

jest.mock('@lib/api/auth')

const mockLogin = AuthAPI.login as jest.Mock
mockLogin
  .mockImplementationOnce(() => Promise.resolve(LoginResponseMock))
  .mockImplementationOnce(() => Promise.reject({message: 'api error'}))
  .mockImplementationOnce(() => Promise.resolve(LoginResponseMock))

const mockSignup = AuthAPI.signup as jest.Mock
mockSignup
  .mockImplementationOnce(() => Promise.resolve())
  .mockImplementationOnce(() => Promise.reject({message: 'api error'}))

const mockLogout = AuthAPI.logout as jest.Mock
mockLogout
  .mockImplementationOnce(() => Promise.resolve())
  .mockImplementationOnce(() => Promise.reject({message: 'api error'}))

const mockRefresh = AuthAPI.refresh as jest.Mock
mockRefresh
  .mockImplementationOnce(() => Promise.resolve({token: LoginResponseMock}))
  .mockImplementationOnce(() => Promise.reject({message: 'api error'}))

const mockSetFn = jest.fn()
const authActions = createAuthActions(mockSetFn)

afterEach(() => {
  mockSetFn.mockClear()
})

test('login success', async () => {
  await authActions.login('email', 'password')
  expect(mockSetFn).toHaveBeenCalledTimes(1)
})

test('login error', async () => {
  try {
    await authActions.login('email', 'password')
  } catch (e) {}

  expect(mockSetFn).not.toHaveBeenCalled()
})

test('signup success', async () => {
  await authActions.signup('email', 'password')
  expect(mockSetFn).toBeCalledWith({
    data: LoginResponseMock,
    initialized: true,
    isLoggedIn: true,
  })
})

test('signup error', async () => {
  try {
    await authActions.signup('email', 'password')
  } catch (e) {}

  expect(mockSetFn).not.toHaveBeenCalled()
})

test('refresh success', async () => {
  await authActions.refresh()
  expect(mockSetFn).toBeCalledWith({
    data: LoginResponseMock,
    initialized: true,
    isLoggedIn: true,
  })
})

test('refresh error', async () => {
  try {
    await authActions.refresh()
  } catch (e) {}

  expect(mockSetFn).toBeCalledWith({
    data: null,
    initialized: true,
    isLoggedIn: false,
  })
})

test('logout success', async () => {
  await authActions.logout()
  expect(mockSetFn).toBeCalledWith({
    data: null,
    initialized: true,
    isLoggedIn: false,
  })
})

test('logout error', async () => {
  try {
    await authActions.logout()
  } catch (e) {}

  expect(mockSetFn).not.toHaveBeenCalled()
})
