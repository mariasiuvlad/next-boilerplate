import LoginForm from './LoginForm'
import {useAuthActions} from '@context/auth'

const LoginFormContainer = () => {
  const {login} = useAuthActions()
  return <LoginForm login={login} />
}

export default LoginFormContainer
