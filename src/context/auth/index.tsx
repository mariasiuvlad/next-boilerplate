import {useState, createContext, useContext} from 'react'
import {TLoginResponseData} from '@lib/api/auth/types'
import createAuthActions from './actions'
import {IProvideAuthState, IProvideAuthActions, IProvideAuth} from './types'
import {logger, useStateLogger} from '@lib/log'

const log = logger.extend('auth:context')

export const authStateFactory = (
  data: TLoginResponseData = null,
  initialized = false
): IProvideAuthState => ({
  data,
  initialized: !!data || initialized,
  isLoggedIn: !!data,
})

const authContext = createContext<IProvideAuthState>(null)
const authActionsContext = createContext<IProvideAuthActions>(null)

export const useAuth = () => useContext(authContext)
export const useAuthActions = () => useContext(authActionsContext)

export function useProvideAuth(initial: IProvideAuthState): IProvideAuth {
  const [state, setState] = useState(initial)
  const actions = createAuthActions(useStateLogger(state, setState, log))
  return {state, actions}
}

export default function ProvideAuth({children, value = authStateFactory()}) {
  const {state, actions} = useProvideAuth(value)
  return (
    <authContext.Provider value={state}>
      <authActionsContext.Provider value={actions}>
        {children}
      </authActionsContext.Provider>
    </authContext.Provider>
  )
}
