import {
  createContext,
  useReducer,
  Reducer,
  useEffect,
  useRef,
  EffectCallback,
  DependencyList,
} from 'react'
import {withReducerLogger} from '@lib/log'
import AuthReducer from './reducer'
import initialState, {IState} from './initialState'
import ActionCreators from './actionCreators'
import {IActionCreators} from './types'
import {TAction} from './actions'
import effects from './effects'

export const AuthContext = createContext<IState>(initialState())
export const AuthActionsContext = createContext<IActionCreators>(null)

export const AuthProvider = ({initialAuthState, children}) => {
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(
    withReducerLogger(AuthReducer, 'Auth/Reducer'),
    initialAuthState || initialState()
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
