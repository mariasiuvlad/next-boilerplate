import {IState} from './initialState'
import {TAction} from './actions'
import {Action} from './types'

const AuthReducer = (state: IState, action: TAction) => {
  const {type, payload: data} = action
  switch (type) {
    // Login
    case Action.LoginStart:
      return {...state, loading: true, error: null}
    case Action.LoginSuccess:
      return {
        ...state,
        data,
        initialized: true,
        isLoggedIn: true,
        loading: false,
      }
    case Action.LoginError:
      return {
        ...state,
        initialized: true,
        loading: false,
        error: data,
      }
    // Refresh
    case Action.RefreshStart:
      return {...state, loading: true, error: null}
    case Action.RefreshError:
      return {...state, initialized: true, loading: false, error: data}
    // logout
    case Action.Logout:
      return {...state, jwtToken: null, isLoggedIn: false}
    default:
      console.warn('invalid action provided to auth state', action)
      return state
  }
}

export default AuthReducer
