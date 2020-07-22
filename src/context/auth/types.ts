import {TLoginResponseData} from '@lib/api/auth/types'

export interface IProvideAuthState {
  data: TLoginResponseData
  initialized: boolean
  isLoggedIn: boolean
}

export interface IProvideAuthActions {
  login: (email: string, password: string) => Promise<void>
  refresh: () => Promise<void>
  logout: () => Promise<void>
  signup: (email: string, password: string) => Promise<void>
}

export interface IProvideAuth {
  state: IProvideAuthState
  actions: IProvideAuthActions
}
