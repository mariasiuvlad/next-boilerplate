import {useEffect} from 'react'
import Router from 'next/router'
import {useAuth} from '@lib/hooks'
import Loading from '@components/common/Loading'

const withLogin = (WrappedComponent) => (props) => {
  const {initialized, isLoggedIn, actions} = useAuth()

  // attempt to refresh token once
  useEffect(() => {
    if (!initialized) actions.refresh()
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
