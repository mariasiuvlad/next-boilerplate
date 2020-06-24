import {
  LoginStart,
  LoginSuccess,
  LoginError,
  Logout,
  RefreshStart,
  TAction,
} from './actions'
import * as AuthAPI from '@lib/api/auth'
import {Dispatch} from 'react'
import {IActionCreators} from './types'

const ActionCreators = (dispatch: Dispatch<TAction>): IActionCreators => ({
  login: (email: string, password: string) => {
    dispatch(LoginStart())
    AuthAPI.login({email, password})
      .then((token) => dispatch(LoginSuccess(token)))
      .catch((e) => dispatch(LoginError(e)))
  },
  logout: () => {
    AuthAPI.logout().then(() => dispatch(Logout()))
  },
  refresh: () => {
    dispatch(RefreshStart())
    AuthAPI.refresh()
      .then(({token}) => dispatch(LoginSuccess(token)))
      .catch((e) => dispatch(LoginError(e)))
  },
  register: (email: string, password: string) => {
    AuthAPI.register({email, password})
  },
})

export default ActionCreators
