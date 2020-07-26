import {useCallback} from 'react'
import {useAuthActions} from '@context/auth'
import {TLoginRequestData} from '@lib/api/auth/types'
import FormContainer from '../components/FormContainer'
import LoginForm from './LoginForm'

export default function LoginFormContainer() {
  const {login} = useAuthActions()
  const callback = useCallback(async ({email, password}: TLoginRequestData) => {
    return login(email, password).catch(() => {
      // custom async error message
      throw new Error('Invalid credentials')
    })
  }, [])

  return <FormContainer render={LoginForm} callback={callback} />
}
