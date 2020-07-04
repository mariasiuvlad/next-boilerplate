import LoginForm from './LoginForm'
import {useAuthActions} from '@lib/hooks'

const LoginFormContainer = () => {
  const {login} = useAuthActions()
  return <LoginForm login={login} />
}

export default LoginFormContainer
