import {useContext} from 'react'
import {AuthContext, AuthActionsContext} from '@context/auth'

export function useAuthActions() {
  return useContext(AuthActionsContext)
}

export function useAuth() {
  const actions = useContext(AuthActionsContext)
  const state = useContext(AuthContext)
  return {...state, actions}
}
