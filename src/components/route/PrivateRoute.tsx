import {useEffect} from 'react'
import React from 'react'
import Router from 'next/router'
import {useAuth} from '@context/auth'
import Loading from '@atom/Loading'

interface PrivateRouteProps {
  render: React.FC
  /** component to display if the user is not logged in */
  fallback?: React.FC
}

const DefaultFallback = () => (
  <div className="w-full h-full bg-gray-700">
    <Loading size="large" />
  </div>
)

const PrivateRoute = ({render: Component, fallback}: PrivateRouteProps) => {
  const {initialized, isLoggedIn} = useAuth()
  const Fallback = fallback || DefaultFallback

  // redirect to login
  useEffect(() => {
    if (initialized && !isLoggedIn) Router.replace('/login')
  }, [initialized, isLoggedIn])

  return !initialized || !isLoggedIn ? <Fallback /> : <Component />
}

export default PrivateRoute
