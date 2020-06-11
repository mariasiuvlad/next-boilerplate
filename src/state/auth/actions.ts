import {Action} from './types'

export interface ILogout {
  type: Action
}
export interface ILoginStart {
  type: Action
}
export interface ILoginSuccess {
  type: Action
  payload: string
}
export interface ILoginError {
  type: Action
  payload: string
}
export interface IRefreshStart {
  type: Action
}
export interface IRefreshSuccess {
  type: Action
  payload: string
}
export interface IRefreshError {
  type: Action
  payload: string
}

export const Logout = (): ILogout => ({
  type: Action.Logout,
})
export const LoginStart = (): ILoginStart => ({
  type: Action.LoginStart,
})
export const LoginSuccess = (payload: string): ILoginSuccess => ({
  type: Action.LoginSuccess,
  payload,
})
export const LoginError = (payload: string): ILoginError => ({
  type: Action.LoginError,
  payload,
})
export const RefreshStart = (): IRefreshStart => ({
  type: Action.RefreshStart,
})
export const RefreshError = (payload: string): IRefreshError => ({
  type: Action.RefreshError,
  payload,
})

export type TAction = {
  type: Action
  payload?: any
}
