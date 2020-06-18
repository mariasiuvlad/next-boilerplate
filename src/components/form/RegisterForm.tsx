import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {useAuthActions} from '@lib/hooks/useAuth'
import {TRegisterRequestData} from '@lib/api/auth/types'
import Router from 'next/router'
import UserCredentialsForm from './UserCredentialsForm'

const RegisterForm = () => {
  const {register, handleSubmit} = useForm<TRegisterRequestData>()
  const authActions = useAuthActions()

  const onSubmit = useCallback(
    async ({email, password}: TRegisterRequestData) => {
      await authActions.register(email, password)
      Router.push('/login')
    },
    []
  )

  return (
    <UserCredentialsForm
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      type="register"
    />
  )
}

export default RegisterForm
