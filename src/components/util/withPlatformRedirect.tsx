import Router from 'next/router'
import {useEffect} from 'react'
import {useAuth, useAuthActions} from '@lib/hooks'

// Redirect logged in users to platform
const withPlatformRedirect = (WrappedComponent) => (props) => {
  const {initialized, isLoggedIn} = useAuth()

  const {refresh} = useAuthActions()
  // attempt to refresh token once
  useEffect(() => {
    if (!initialized) refresh()
  }, [])
  useEffect(() => {
    if (isLoggedIn) {
      Router.push('/platform')
    }
  }, [isLoggedIn])
  if (!initialized) return <div>init...</div>
  return <WrappedComponent {...props} />
}

export default withPlatformRedirect
