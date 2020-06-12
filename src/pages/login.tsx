import {useEffect, useContext} from 'react'
import Router from 'next/router'
import LoginForm from '@components/form/login'
import AuthStore from '@state/auth'
import LoginButton from '@components/LoginButton'
import {Flex} from '@chakra-ui/core'

// Redirects to `/platform` if the user is logged in
const withRedirect = (WrappedComponent) => (props) => {
  const {state} = useContext(AuthStore)
  const {isLoggedIn} = state
  useEffect(() => {
    if (isLoggedIn) {
      Router.push('/platform', undefined, {shallow: true})
    }
  }, [isLoggedIn])
  return isLoggedIn ? (
    <p>Already logged in. Redirecting to app...</p>
  ) : (
    <WrappedComponent {...props} />
  )
}

const Login = () => (
  <Flex flex={1} alignItems="flex-start" justifyContent="space-between">
    <LoginForm />
    <LoginButton />
  </Flex>
)

export default withRedirect(Login)
