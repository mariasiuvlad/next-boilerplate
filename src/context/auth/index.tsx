import {createContext, useReducer, Reducer, useEffect, useRef} from 'react'
import {withReducerLogger} from '@lib/log'
import AuthReducer from './reducer'
import initialState, {IState} from './initialState'
import ActionCreators from './actionCreators'
import {IActionCreators} from './types'
import {TAction} from './actions'

export const AuthContext = createContext<IState>(initialState())
export const AuthActionsContext = createContext<IActionCreators>(null)

export const AuthProvider = ({initialAuthState, children}) => {
  const initial = initialAuthState || initialState()
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(
    withReducerLogger(AuthReducer, 'Auth/Reducer'),
    initial
  )

  const authActions = ActionCreators(dispatch)

  const refreshHandle = useRef(null)
  const {isLoggedIn, data} = state

  /**
   * @TODO find a way to generalize side effects
   */
  useEffect(() => {
    if (isLoggedIn) {
      const timeToRefresh = data.jwt_expires_in - 1000 * 30 // 30s before expiry
      refreshHandle.current = setTimeout(authActions.refresh, timeToRefresh)
    } else {
      clearTimeout(refreshHandle.current)
    }
  }, [data])

  return (
    <AuthContext.Provider value={state}>
      <AuthActionsContext.Provider value={authActions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  )
}
