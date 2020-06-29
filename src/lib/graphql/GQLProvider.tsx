import {ApolloProvider} from '@apollo/react-hooks'
import {useAuth} from '@lib/hooks/useAuth'
import {useApollo} from '@lib/hooks/useApollo'

const GQLProvider = (props) => {
  const {initialApolloState, children} = props
  const {data} = useAuth()
  const client = useApollo(initialApolloState, data?.jwt_token)
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GQLProvider
