import SignupForm from './SignupForm'
import {useAuthActions} from '@context/auth'

const SignupFormContainer = () => {
  const {signup} = useAuthActions()
  return <SignupForm signup={signup} />
}

export default SignupFormContainer
