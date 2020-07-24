import {useEffect} from 'react'
import {useAuth, useAuthActions} from '@context/auth'

const withSilentRefresh = (WrappedComponent) => (props) => {
  const {initialized} = useAuth()
  const {refresh} = useAuthActions()

  // attempt to refresh token
  useEffect(() => {
    if (!initialized) refresh()
  }, [])

  return <WrappedComponent {...props} />
}

export default withSilentRefresh
