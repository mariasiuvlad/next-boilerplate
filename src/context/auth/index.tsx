import {useState, createContext, useContext} from 'react'
import {TLoginResponseData} from '@lib/api/auth/types'
import createAuthActions from './actions'

interface IProvideAuthState {
  data: TLoginResponseData
  initialized: boolean
  isLoggedIn: boolean
}

interface IProvideAuthActions {
  login: (email: string, password: string) => Promise<void>
  refresh: () => Promise<void>
  logout: () => Promise<void>
  signup: (email: string, password: string) => Promise<void>
}

interface IProvideAuth {
  state: IProvideAuthState
  actions: IProvideAuthActions
}

export const iStateFactory = (
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
  const [state, setState] = useState(initial || iStateFactory())
  const actions = createAuthActions(setState)

  return {state, actions}
}

export default function ProvideAuth({children, value = null}) {
  const {state, actions} = useProvideAuth(value)
  return (
    <authContext.Provider value={state}>
      <authActionsContext.Provider value={actions}>
        {children}
      </authActionsContext.Provider>
    </authContext.Provider>
  )
}
