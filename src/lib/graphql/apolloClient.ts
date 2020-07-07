import {useMemo} from 'react'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {onError} from 'apollo-link-error'
import {ApolloLink} from 'apollo-link'
import {GQL_API} from '@config/index'
import {logger} from '@lib/log'

const log = logger.extend('gql')

let apolloClient: ApolloClient<NormalizedCacheObject>
let token: string

type ApolloInitOptions = {
  initialState?: any
  jwtToken?: string
}

const authLink = (jwtToken: string) =>
  new ApolloLink((operation, forward) => {
    if (jwtToken || token) {
      const headers = {Authorization: `Bearer ${jwtToken || token}`}
      operation.setContext({headers})
    }
    return forward(operation)
  })

const httpLink = new HttpLink({
  uri: GQL_API, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) =>
      log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) log(`[Network error]: ${networkError}`)
})

function createApolloClient(jwtToken = '') {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([authLink(jwtToken || token), errorLink, httpLink]),
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
  // Update apollo inmemory token
  token = jwtToken

  return _apolloClient
}

export function useApollo(initialState = {}, jwtToken = '') {
  const store = useMemo(() => initializeApollo({initialState, jwtToken}), [
    jwtToken,
  ])
  return store
}
