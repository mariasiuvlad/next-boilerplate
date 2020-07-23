import LoginForm from './LoginForm'
import {useAuthActions} from '@context/auth'
import {useForm} from 'react-hook-form'
import {TRegisterRequestData} from '@lib/api/auth/types'
import {useCallback} from 'react'
import {EMAIL_CONFIG, PASSWORD_CONFIG, LoginFormValues} from './config'
import useInput from '../components/useInput'

const LoginFormContainer = () => {
  const {login} = useAuthActions()

  const form = useForm<LoginFormValues>()
  const {handleSubmit, reset, setError} = form
  const textInput = useInput(form)

  const onSubmit = useCallback(async ({email, password}: TRegisterRequestData) => {
    login(email, password).then(
      () => reset(),
      ({message}) => setError('api', {type: 'manual', message})
    )
  }, [])

  return (
    <LoginForm
      onSubmit={handleSubmit(onSubmit)}
      form={form}
      inputs={{
        email: textInput(EMAIL_CONFIG),
        password: textInput(PASSWORD_CONFIG),
      }}
    />
  )
}

export default LoginFormContainer
