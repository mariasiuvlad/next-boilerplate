import {useEffect} from 'react'
import Router from 'next/router'
import {useAuth, useAuthActions} from '@context/auth'
import Loading from '@atom/Loading'

const privatePage = (WrappedComponent) => (props) => {
  const {initialized, isLoggedIn} = useAuth()
  const {refresh} = useAuthActions()

  // attempt to refresh token once
  useEffect(() => {
    if (!initialized) refresh()
  }, [])

  // redirect to login
  useEffect(() => {
    if (initialized && !isLoggedIn) Router.replace('/login')
  }, [initialized, isLoggedIn])

  return !initialized || !isLoggedIn ? <Loading size="large" /> : <WrappedComponent {...props} />
}

export default privatePage
