import {ApolloProvider} from '@apollo/react-hooks'
import {useApollo} from './apolloClient'
import ProvideAuth, {useAuth} from '@context/auth'

const GQLProvider = (props) => {
  const {initialApolloState, children} = props
  const {data} = useAuth()
  const client = useApollo(initialApolloState, data?.jwt_token)
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

/**
 * includes withProvideAuth since we are always using Apollo with authentication
 * can be decoupled if a need for apollo without auth arises
 */
export const withApollo = (Component) => ({initialApolloState, ...rest}) => {
  return (
    <GQLProvider initialApolloState={initialApolloState}>
      <Component {...rest} />
    </GQLProvider>
  )
}

export const withAuthApollo = (Component) => ({
  initialAuthState,
  initialApolloState,
  ...rest
}) => {
  return (
    <ProvideAuth value={initialAuthState}>
      <GQLProvider initialApolloState={initialApolloState}>
        <Component {...rest} />
      </GQLProvider>
    </ProvideAuth>
  )
}

export default GQLProvider
