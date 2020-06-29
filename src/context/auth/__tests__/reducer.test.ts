import AuthReducer from '../reducer'
import initialState from '../initialState'
import {
  LoginStart,
  LoginSuccess,
  LoginError,
  Logout,
  RefreshStart,
  RefreshError,
  TAction,
} from '../actions'
import {LoginResponseMock} from '__mocks__'
import {AxiosError} from 'axios'

const mockError = new Error('<Mock Error>') as AxiosError
const mockBadAction = ('<Bad acton>' as unknown) as TAction

test('it works', () => {
  let state = AuthReducer(initialState(), LoginStart())
  expect(state.loading).toBe(true)
  expect(state.error).toBe(null)

  state = AuthReducer(state, LoginSuccess(LoginResponseMock))
  expect(state.loading).toBe(false)
  expect(state.isLoggedIn).toBe(true)
  expect(state.initialized).toBe(true)
  expect(state.data.jwt_token).toBe('<Mock JWTToken>')
  expect(state.data.jwt_expires_in).toBe(900000)

  state = AuthReducer(state, Logout())
  expect(state.isLoggedIn).toBe(false)
  expect(state.data).toBe(null)

  state = AuthReducer(state, LoginStart())
  state = AuthReducer(state, LoginError(mockError))
  expect(state.error.message).toBe('<Mock Error>')
  expect(state.loading).toBe(false)
  expect(state.isLoggedIn).toBe(false)
  expect(state.initialized).toBe(true)

  state = AuthReducer(state, RefreshStart())
  expect(state.loading).toBe(true)
  expect(state.error).toBe(null)

  state = AuthReducer(state, RefreshError(mockError))
  expect(state.error.message).toBe('<Mock Error>')
  expect(state.loading).toBe(false)
  expect(state.isLoggedIn).toBe(false)
  expect(state.initialized).toBe(true)

  const prevState = state
  state = AuthReducer(state, mockBadAction)
  expect(state).toEqual(prevState)
})
