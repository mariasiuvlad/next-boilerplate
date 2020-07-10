import SignupForm from './SignupForm'
import {useAuthActions} from '@context/auth'
import {useForm} from 'react-hook-form'
import {TRegisterRequestData} from '@lib/api/auth/types'
import {useCallback} from 'react'
import {EMAIL_CONFIG, PASSWORD_CONFIG, SignupFormValues} from './config'
import useTextInput from '../components/useTextInput'

const SignupFormContainer = () => {
  const {signup} = useAuthActions()
  const form = useForm<SignupFormValues>()

  const {handleSubmit, reset, setError} = form
  const textInput = useTextInput(form)

  const onSubmit = useCallback(
    async ({email, password}: TRegisterRequestData) =>
      signup(email, password).then(
        () => reset(),
        ({message}) => setError('api', {type: 'manual', message})
      ),
    []
  )

  const inputs = {
    email: textInput(EMAIL_CONFIG),
    password: textInput(PASSWORD_CONFIG),
  }

  return (
    <SignupForm onSubmit={handleSubmit(onSubmit)} form={form} inputs={inputs} />
  )
}

export default SignupFormContainer
