import {TJWTToken} from '@lib/api/auth/types'
import {AxiosError} from 'axios'

export namespace ActionTypes {
  export const Logout = 'Logout'
  export const LoginStart = 'Login/Start'
  export const LoginSuccess = 'Login/Success'
  export const LoginError = 'Login/Error'
  export const RefreshStart = 'Refresh/Start'
  export const RefreshError = 'Refresh/Error'
  export const RegisterError = 'Register/Error'
}

export namespace Actions {
  export interface ILogout {
    type: typeof ActionTypes.Logout
  }
  export interface ILoginStart {
    type: typeof ActionTypes.LoginStart
  }
  export interface ILoginSuccess {
    type: typeof ActionTypes.LoginSuccess
    payload: TJWTToken
  }
  export interface ILoginError {
    type: typeof ActionTypes.LoginError
    payload: AxiosError
  }
  export interface IRefreshStart {
    type: typeof ActionTypes.RefreshStart
  }
  export interface IRefreshSuccess {
    type: typeof ActionTypes.LoginSuccess
    payload: TJWTToken
  }
  export interface IRefreshError {
    type: typeof ActionTypes.RefreshError
    payload: AxiosError
  }
  export interface IRegisterError {
    type: typeof ActionTypes.RegisterError
    payload: AxiosError
  }
}

export interface IActionCreators {
  login: (email: string, password: string) => void
  register: (email: string, password: string) => void
  logout: () => void
  refresh: () => void
}
