import {IState} from './initialState'
import {TAction} from './actions'
import {ActionTypes} from './types'

const AuthReducer = (state: IState, action: TAction) => {
  switch (action.type) {
    // Login
    case ActionTypes.LoginStart:
      return {...state, loading: true, error: null}
    case ActionTypes.LoginSuccess:
      const {payload: data} = action
      return {
        ...state,
        data,
        initialized: true,
        isLoggedIn: true,
        loading: false,
      }
    case ActionTypes.LoginError:
      const {payload: error} = action
      return {
        ...state,
        error,
        initialized: true,
        loading: false,
        isLoggedIn: false,
      }
    // Refresh
    case ActionTypes.RefreshStart:
      return {...state, loading: true, error: null}
    case ActionTypes.RefreshError:
      return {
        ...state,
        initialized: true,
        loading: false,
        error: action.payload,
      }
    // logout
    case ActionTypes.Logout:
      return {...state, data: null, isLoggedIn: false}
    default:
      /** @TODO log action exception */
      return state
  }
}

export default AuthReducer
