import {IState} from './initialState'

export const getAuthState: (string) => IState = (jwtToken) => ({
  jwtToken,
  isLoggedIn: !!jwtToken,
  loading: false,
})
