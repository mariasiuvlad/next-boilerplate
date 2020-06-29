import {createContext, useReducer, Reducer, useEffect} from 'react'
import {withReducerLogger} from '@lib/log'
import AuthReducer from './reducer'
import initialState, {IState} from './initialState'
import ActionCreators from './actionCreators'
import {IActionCreators} from './types'
import {TAction} from './actions'
import effects from './effects'

export const AuthContext = createContext<IState>(initialState())
export const AuthActionsContext = createContext<IActionCreators>(null)

export const AuthProvider = ({initialAuthState = initialState(), children}) => {
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(
    withReducerLogger(AuthReducer, 'Auth/Reducer'),
    initialAuthState
  )
  const authActions = ActionCreators(dispatch)

  // enable effects
  effects(state, authActions).forEach((effect) => useEffect(...effect))

  return (
    <AuthContext.Provider value={state}>
      <AuthActionsContext.Provider value={authActions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  )
}
