import {HttpLink} from 'apollo-link-http'
import {WebSocketLink} from 'apollo-link-ws'
import {onError} from 'apollo-link-error'
import {ApolloLink, split} from 'apollo-link'
import {getMainDefinition} from 'apollo-utilities'
import {GQL_API} from '@config'
import {logger} from '@lib/log'

const log = logger.extend('gql')

export const authLink = (jwtToken: string) =>
  new ApolloLink((operation, forward) => {
    if (jwtToken) {
      const headers = {Authorization: `Bearer ${jwtToken}`}
      operation.setContext({headers})
    }
    return forward(operation)
  })

export const errorLink = (errorHandler) =>
  onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({message, locations, path}) =>
        log('[GraphQL error]: Message: %s, Location: %s, Path: %s', message, locations, path)
      )
    if (networkError) log('[Network error] %o', networkError)
    errorHandler[graphQLErrors[0].extensions.code] &&
      errorHandler[graphQLErrors[0].extensions.code]()
  })

const httpLink = new HttpLink({
  uri: GQL_API, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

// Create a WebSocket link
const wsLink = (jwtToken: string) =>
  // only create WebSocket link in the browser
  process.browser
    ? new WebSocketLink({
        uri: GQL_API.replace('http', 'ws'),
        options: {
          reconnect: true,
          connectionParams: {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          },
        },
      })
    : null

export const transportLink = (jwtToken: string) =>
  // only use WebSocket link in the browser
  process.browser
    ? split(
        // split based on operation type
        ({query}) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
          )
        },
        wsLink(jwtToken),
        httpLink
      )
    : httpLink
