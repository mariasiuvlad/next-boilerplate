import Router from 'next/router'
import {useEffect} from 'react'
import Loading from '@atom/Loading'
import {useAuth, useAuthActions} from '@context/auth'

// Redirect logged in users to platform
const withPlatformRedirect = (WrappedComponent) => (props) => {
  const {initialized, isLoggedIn} = useAuth()
  const {refresh} = useAuthActions()

  // attempt to refresh token once
  useEffect(() => {
    if (!initialized) refresh()
  }, [])

  useEffect(() => {
    if (isLoggedIn) Router.replace('/platform')
  }, [isLoggedIn])

  if (!initialized || isLoggedIn) return <Loading />
  return <WrappedComponent {...props} />
}

export default withPlatformRedirect
