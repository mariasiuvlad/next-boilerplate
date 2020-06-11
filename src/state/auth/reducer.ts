import {getAuthState} from './utils'
import {IState} from './initialState'
import {TAction} from './actions'
import {Action} from './types'
import log from '@lib/log'

const authReducer: (state: IState, action: TAction) => IState = (
  state,
  action
) => {
  const {type, payload} = action
  log.info(`[${type}]`)
  switch (type) {
    // Login
    case Action.LoginStart:
      return {...state, loading: true}
    case Action.LoginSuccess:
      return {
        ...state,
        jwtToken: payload,
        isLoggedIn: true,
        loading: false,
      }
    case Action.LoginError:
      return {...state, loading: false}
    // Refresh
    case Action.RefreshStart:
      return {...state, loading: true}
    case Action.RefreshError:
      return {...state, loading: false}
    // logout
    case Action.Logout:
      return getAuthState(false)
    default:
      console.warn('invalid action provided to auth state', action)
      return state
  }
}

export default authReducer
