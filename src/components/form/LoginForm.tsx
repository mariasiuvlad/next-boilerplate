import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {useAuthActions} from '@lib/hooks/useAuth'
import UserCredentialsForm from './UserCredentialsForm'

type LoginData = {
  email: string
  password: string
}

const LoginForm = () => {
  const {register, handleSubmit} = useForm<LoginData>()
  const {login} = useAuthActions()

  const onSubmit = useCallback(
    async ({email, password}: LoginData) => login(email, password),
    []
  )

  return (
    <UserCredentialsForm
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      type="login"
    />
  )
}

export default LoginForm
