import {
  LoginStart,
  LoginSuccess,
  LoginError,
  Logout,
  RefreshStart,
  TAction,
  RegisterError,
} from './actions'
import * as AuthAPI from '@lib/api/auth'
import {Dispatch} from 'react'
import {IActionCreators} from './types'

const login = (dispatch) => (email: string, password: string) => {
  dispatch(LoginStart())
  return AuthAPI.login({email, password}).then(
    (token) => dispatch(LoginSuccess(token)),
    (e) => {
      dispatch(LoginError(e))
      throw e
    }
  )
}

const refresh = (dispatch) => () => {
  dispatch(RefreshStart())
  return AuthAPI.refresh().then(
    ({token}) => dispatch(LoginSuccess(token)),
    (e) => {
      dispatch(LoginError(e))
      throw e
    }
  )
}

const signup = (dispatch) => (email: string, password: string) =>
  AuthAPI.signup({email, password}).then(
    () => login(dispatch)(email, password),
    (e) => {
      dispatch(RegisterError(e))
      throw e
    }
  )

const logout = (dispatch) => () =>
  AuthAPI.logout().then(() => dispatch(Logout()))

const ActionCreators = (dispatch: Dispatch<TAction>): IActionCreators => ({
  login: login(dispatch),
  logout: logout(dispatch),
  refresh: refresh(dispatch),
  signup: signup(dispatch),
})

export default ActionCreators
