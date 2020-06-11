import {useMemo} from 'react'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloLink, concat} from 'apollo-link'

let apolloClient: ApolloClient<NormalizedCacheObject>

const authMiddleware = (jwtToken) =>
  new ApolloLink((operation, forward) => {
    if (jwtToken) {
      const headers = {Authorization: `Bearer ${jwtToken}`}
      operation.setContext({headers})
    }
    return forward(operation)
  })

const httpLink = new HttpLink({
  uri: 'https://api.playtwin.com/v1/graphql', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

function createApolloClient(jwtToken) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: concat(authMiddleware(jwtToken), httpLink),
    cache: new InMemoryCache(),
  })
}

type ApolloInitOptions = {
  initialState?: any
  jwtToken?: string
}

export function initializeApollo({initialState, jwtToken}: ApolloInitOptions) {
  const _apolloClient = apolloClient ?? createApolloClient(jwtToken)

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

export function useApollo(initialState, jwtToken = '') {
  const store = useMemo(() => initializeApollo({initialState, jwtToken}), [
    initialState,
  ])
  return store
}
