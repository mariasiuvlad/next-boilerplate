import {GetServerSideProps} from 'next'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import {useEffect, useContext} from 'react'

import {initializeApollo} from '@lib/apolloClient'
import {refreshToken} from '@lib/auth'
import Users, {Users2, GET_USERS2} from '@components/users'
import AuthStore from '@state/auth'

const LoginPage = dynamic(() => import('../login'))

const withAuth = (WrappedComponent) => (props) => {
  const {state} = useContext(AuthStore)
  const {isLoggedIn} = state
  useEffect(() => {
    if (!isLoggedIn) {
      Router.replace('/login')
    }
  }, [isLoggedIn])
  if (!isLoggedIn) {
    return <LoginPage />
  }
  return <WrappedComponent {...props} />
}

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Users />
      <Users2 />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let props: any = {}
  // check auth
  const jwtToken = await refreshToken(ctx)
  if (!jwtToken) return {props}
  props = {...props, jwtToken}
  // fetch server-side data
  const apolloClient = initializeApollo({jwtToken})
  await apolloClient.query({query: GET_USERS2})
  props = {...props, initialApolloState: apolloClient.cache.extract()}
  return {props}
}

export default withAuth(DashboardPage)
