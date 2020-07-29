import {TLoginResponseData} from '@lib/api/auth/types'
import {IProvideAuthState} from './types'

export const AuthStateFactory = (
  data: TLoginResponseData = null,
  initialized = false
): IProvideAuthState => ({
  data,
  initialized: !!data || initialized,
  isLoggedIn: !!data,
})

export const AuthState = {
  Uninitialized: () => AuthStateFactory(),
  Unauthenticated: () => AuthStateFactory(null, true),
  Authenticated: (data: TLoginResponseData) => AuthStateFactory(data),
}
