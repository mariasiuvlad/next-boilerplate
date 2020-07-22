import * as AuthAPI from '@lib/api/auth'
import {authStateFactory} from '.'

export default function createAuthActions(setAuthState) {
  const login = (email: string, password: string) =>
    AuthAPI.login({email, password}).then((data) => setAuthState(authStateFactory(data)))

  const signup = (email: string, password: string) =>
    AuthAPI.signup({email, password}).then(() => login(email, password))

  const refresh = () =>
    AuthAPI.refresh().then(
      ({token}) => setAuthState(authStateFactory(token)),
      () => setAuthState(authStateFactory(null, true))
    )

  const logout = () => AuthAPI.logout().then(() => setAuthState(authStateFactory(null, true)))

  return {login, signup, refresh, logout}
}
