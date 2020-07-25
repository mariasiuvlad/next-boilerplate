import {useState, createContext, useContext, useEffect, useRef} from 'react'
import createAuthActions from './actions'
import {IProvideAuthState, IProvideAuthActions, IProvideAuth} from './types'
import {logger, useStateLogger} from '@lib/log'
import {AuthState} from './state'

const log = logger.extend('auth:context')

const authContext = createContext<IProvideAuthState>(null)
const authActionsContext = createContext<IProvideAuthActions>(null)

export const useAuth = () => useContext(authContext)
export const useAuthActions = () => useContext(authActionsContext)

export function useProvideAuth(initial: IProvideAuthState): IProvideAuth {
  const refreshHandle = useRef(null)
  const [state, setState] = useState(initial)
  const actions = createAuthActions(useStateLogger(state, setState, log))

  // refresh jwt token before expiry
  useEffect(() => {
    if (state.initialized && !!state.data) {
      refreshHandle.current = setTimeout(actions.refresh, state.data.jwt_expires_in - 30 * 1000)
    } else {
      clearTimeout(refreshHandle.current)
    }
  }, [state.data])

  return {state, actions}
}

export default function ProvideAuth({children, value = AuthState.Uninitialized()}) {
  const {state, actions} = useProvideAuth(value)

  // attempt to refresh token
  useEffect(() => {
    if (!state.initialized) actions.refresh()
  }, [])

  return (
    <authContext.Provider value={state}>
      <authActionsContext.Provider value={actions}>{children}</authActionsContext.Provider>
    </authContext.Provider>
  )
}
