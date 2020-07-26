import {useCallback} from 'react'
import {useAuthActions} from '@context/auth'
import {TRegisterRequestData} from '@lib/api/auth/types'
import FormContainer from '../components/FormContainer'
import SignupForm from './SignupForm'

const SignupFormContainer = () => {
  const {signup} = useAuthActions()

  const callback = useCallback(
    async ({email, password}: TRegisterRequestData) => signup(email, password),
    []
  )

  return <FormContainer callback={callback} render={SignupForm} />
}

export default SignupFormContainer
