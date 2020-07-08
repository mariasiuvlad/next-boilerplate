import {useMemo} from 'react'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory'
import {createClientLink} from './links'

let apolloClient: ApolloClient<NormalizedCacheObject>

type ApolloInitOptions = {
  initialState?: any
  jwtToken?: string
}

function createApolloClient(jwtToken = '') {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createClientLink(jwtToken),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo({initialState, jwtToken}: ApolloInitOptions) {
  const _apolloClient = jwtToken
    ? createApolloClient(jwtToken)
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

export function useApollo(initialState = {}, jwtToken = '') {
  const store = useMemo(() => initializeApollo({initialState, jwtToken}), [
    jwtToken,
  ])
  return store
}
