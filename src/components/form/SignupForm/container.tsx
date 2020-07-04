import SignupForm from './SignupForm'
import {useCallback} from 'react'
import {TRegisterRequestData} from '@lib/api/auth/types'
import {useAuthActions} from '@lib/hooks'
import * as AuthAPI from '@lib/api/auth'

const SignupFormContainer = () => {
  const authActions = useAuthActions()
  const signup = useCallback(
    async ({email, password}: TRegisterRequestData) => {
      await AuthAPI.signup({email, password})
      authActions.login(email, password)
    },
    []
  )

  return <SignupForm signup={signup} />
}

export default SignupFormContainer
