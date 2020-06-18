import {createContext, useReducer, Reducer} from 'react'
import {withReducerLogger} from '@lib/log'
import AuthReducer from './reducer'
import initialState, {IState} from './initialState'
import ActionCreators from './actionCreators'
import {IActionCreators} from './IActionCreators'
import {TAction} from './actions'

export const AuthContext = createContext<IState>(initialState())
export const AuthActionsContext = createContext<IActionCreators>(null)

export const AuthProvider = ({initialAuthState, children}) => {
  const initial = initialAuthState || initialState()
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(
    withReducerLogger(AuthReducer, 'Auth/Reducer'),
    initial
  )

  return (
    <AuthContext.Provider value={state}>
      <AuthActionsContext.Provider value={ActionCreators(dispatch)}>
        {children}
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  )
}
