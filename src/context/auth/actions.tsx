import * as AuthAPI from '@lib/api/auth'
import {iStateFactory} from '.'

export default function createAuthActions(setAuthState) {
  const login = (email: string, password: string) =>
    AuthAPI.login({email, password}).then((data) =>
      setAuthState(iStateFactory(data))
    )

  const signup = (email: string, password: string) =>
    AuthAPI.signup({email, password}).then(() => login(email, password))

  const refresh = () =>
    AuthAPI.refresh().then(
      ({token}) => setAuthState(iStateFactory(token)),
      () => setAuthState(iStateFactory(null, true))
    )

  const logout = () =>
    AuthAPI.logout().then(() => setAuthState(iStateFactory(null, true)))

  return {login, signup, refresh, logout}
}
