import SignupForm from './SignupForm'
import {useAuthActions} from '@context/auth'
import {useForm} from 'react-hook-form'
import {TRegisterRequestData} from '@lib/api/auth/types'

const SignupFormContainer = () => (
  <SignupForm
    signup={useAuthActions().signup}
    form={useForm<TRegisterRequestData>()}
  />
)

export default SignupFormContainer
