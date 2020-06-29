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
  AuthAPI.login({email, password}).then(
    (token) => dispatch(LoginSuccess(token)),
    (e) => dispatch(LoginError(e))
  )
}

const ActionCreators = (dispatch: Dispatch<TAction>): IActionCreators => ({
  login: login(dispatch),
  logout: () => {
    AuthAPI.logout().then(() => dispatch(Logout()))
  },
  refresh: () => {
    dispatch(RefreshStart())
    AuthAPI.refresh().then(
      ({token}) => dispatch(LoginSuccess(token)),
      (e) => dispatch(LoginError(e))
    )
  },
  /** @TODO add register actions */
  register: (email: string, password: string) => {
    AuthAPI.register({email, password}).then(() => {
      login(dispatch)(email, password), (e) => dispatch(RegisterError(e))
    })
  },
})

export default ActionCreators
