import AuthReducer from '../reducer'
import initialState from '../initialState'
import {
  LoginStart,
  LoginSuccess,
  LoginError,
  Logout,
  RefreshStart,
  RefreshError,
} from '../actions'
import {LoginResponseMock} from '__mocks__'

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
  state = AuthReducer(state, LoginError(new Error('error')))
  expect(state.error.message).toBe('error')
  expect(state.loading).toBe(false)
  expect(state.isLoggedIn).toBe(false)
  expect(state.initialized).toBe(true)

  state = AuthReducer(state, RefreshStart())
  expect(state.loading).toBe(true)
  expect(state.error).toBe(null)

  state = AuthReducer(state, RefreshError(new Error('error')))
  expect(state.error.message).toBe('error')
  expect(state.loading).toBe(false)
  expect(state.isLoggedIn).toBe(false)
  expect(state.initialized).toBe(true)

  const prevState = state
  state = AuthReducer(state, 'random stuff')
  expect(state).toEqual(prevState)
})
