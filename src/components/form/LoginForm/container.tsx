import LoginForm from './LoginForm'
import {useAuthActions} from '@context/auth'
import {useForm} from 'react-hook-form'
import {TRegisterRequestData} from '@lib/api/auth/types'

const LoginFormContainer = () => (
  <LoginForm
    login={useAuthActions().login}
    form={useForm<TRegisterRequestData>()}
  />
)

export default LoginFormContainer
