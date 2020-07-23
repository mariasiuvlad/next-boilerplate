import {useEffect} from 'react'
import Router from 'next/router'
import Loading from '@components/atoms/Loading'
import {useAuth, useAuthActions} from '@context/auth'

const withLogin = (WrappedComponent) => (props) => {
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

  return !initialized || !isLoggedIn ? <Loading /> : <WrappedComponent {...props} />
}

export default withLogin
