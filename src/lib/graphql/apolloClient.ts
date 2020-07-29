import {useMemo} from 'react'
import {ApolloClient} from 'apollo-client'
import {ApolloLink} from 'apollo-link'
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory'
import {useAuthActions} from '@context/auth'
import {errorLink, authLink, transportLink} from './links'

let apolloClient: ApolloClient<NormalizedCacheObject>

type ApolloInitOptions = {
  initialState?: NormalizedCacheObject
  jwtToken?: string
  errorHandler: Record<string, () => void>
}

function createApolloClient(jwtToken = '', errorHandler?) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([errorLink(errorHandler), authLink(jwtToken), transportLink(jwtToken)]),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo({initialState, jwtToken, errorHandler}: ApolloInitOptions) {
  const _apolloClient = jwtToken
    ? createApolloClient(jwtToken, errorHandler)
    : apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = (initialState = {}, jwtToken = '') => {
  const {logout} = useAuthActions()
  const errorHandler = {'invalid-jwt': logout}
  return useMemo(() => initializeApollo({initialState, jwtToken, errorHandler}), [jwtToken])
}
