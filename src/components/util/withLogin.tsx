import {useEffect} from 'react'
import Router from 'next/router'
import {useAuth, useAuthActions} from '@lib/hooks'
import Loading from '@components/common/Loading'

const withLogin = (WrappedComponent) => (props) => {
  const {initialized, isLoggedIn} = useAuth()
  const {refresh} = useAuthActions()

  // attempt to refresh token once
  useEffect(() => {
    if (!initialized) refresh()
  }, [])

  useEffect(() => {
    if (initialized && !isLoggedIn) {
      Router.replace('/login')
    }
  }, [isLoggedIn])

  if (!initialized || !isLoggedIn) {
    return <Loading />
  }
  return <WrappedComponent {...props} />
}

export default withLogin
