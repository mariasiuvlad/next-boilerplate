import {Actions, ActionTypes} from './types'
import {TJWTToken} from '@lib/api/auth/types'
import {AxiosError} from 'axios'

// Basic action creators
export const Logout = (): Actions.ILogout => ({
  type: ActionTypes.Logout,
})
export const LoginStart = (): Actions.ILoginStart => ({
  type: ActionTypes.LoginStart,
})
export const LoginSuccess = (payload: TJWTToken): Actions.ILoginSuccess => ({
  type: ActionTypes.LoginSuccess,
  payload,
})
export const LoginError = (payload: AxiosError): Actions.ILoginError => ({
  type: ActionTypes.LoginError,
  payload,
})
export const RefreshStart = (): Actions.IRefreshStart => ({
  type: ActionTypes.RefreshStart,
})
export const RefreshError = (payload: AxiosError): Actions.IRefreshError => ({
  type: ActionTypes.RefreshError,
  payload,
})
export const RegisterError = (payload: AxiosError): Actions.IRegisterError => ({
  type: ActionTypes.RegisterError,
  payload,
})

export type TAction =
  | Actions.ILogout
  | Actions.ILoginStart
  | Actions.ILoginSuccess
  | Actions.ILoginError
  | Actions.IRefreshStart
  | Actions.IRefreshSuccess
  | Actions.IRefreshError
  | Actions.IRegisterError
