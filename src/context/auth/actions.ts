import {Action} from './types'
import {TJWTToken} from '@lib/api/auth/types'
import {AxiosError} from 'axios'

export interface ILogout {
  type: Action
}
export interface ILoginStart {
  type: Action
}
export interface ILoginSuccess {
  type: Action
  payload: TJWTToken
}
export interface ILoginError {
  type: Action
  payload: AxiosError
}
export interface IRefreshStart {
  type: Action
}
export interface IRefreshSuccess {
  type: Action
  payload: TJWTToken
}
export interface IRefreshError {
  type: Action
  payload: AxiosError
}

// Basic action creators
export const Logout = (): ILogout => ({
  type: Action.Logout,
})
export const LoginStart = (): ILoginStart => ({
  type: Action.LoginStart,
})
export const LoginSuccess = (payload: TJWTToken): ILoginSuccess => ({
  type: Action.LoginSuccess,
  payload,
})
export const LoginError = (payload: AxiosError): ILoginError => ({
  type: Action.LoginError,
  payload,
})
export const RefreshStart = (): IRefreshStart => ({
  type: Action.RefreshStart,
})
export const RefreshError = (payload: AxiosError): IRefreshError => ({
  type: Action.RefreshError,
  payload,
})

export type TAction = {
  type: Action
  payload?: any
}
