import {useContext} from 'react'
import {AuthContext, AuthActionsContext} from '@context/auth'

export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthActions() {
  return useContext(AuthActionsContext)
}
