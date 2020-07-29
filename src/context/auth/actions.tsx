import * as AuthAPI from '@lib/api/auth'
import {AuthState} from './state'

export default function createAuthActions(setAuthState) {
  const login = (email: string, password: string) =>
    AuthAPI.login({email, password}).then((data) => setAuthState(AuthState.Authenticated(data)))

  const signup = (email: string, password: string) =>
    AuthAPI.signup({email, password}).then(() => login(email, password))

  const refresh = () =>
    AuthAPI.refresh().then(
      ({token}) => setAuthState(AuthState.Authenticated(token)),
      () => setAuthState(AuthState.Unauthenticated())
    )

  const logout = () => AuthAPI.logout().then(() => setAuthState(AuthState.Unauthenticated()))

  return {login, signup, refresh, logout}
}
