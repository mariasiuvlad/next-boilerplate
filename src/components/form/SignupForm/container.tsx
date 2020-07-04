import SignupForm from './SignupForm'
import {useAuthActions} from '@lib/hooks'

const SignupFormContainer = () => {
  const {signup} = useAuthActions()

  return <SignupForm signup={signup} />
}

export default SignupFormContainer
