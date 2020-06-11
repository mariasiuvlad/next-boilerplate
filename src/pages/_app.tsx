import {ApolloProvider} from '@apollo/react-hooks'
import {useApollo} from '@lib/apolloClient'
import Layout from '@components/layout'
import {AuthProvider} from 'state/auth'
import debug from 'debug'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'
import customTheme from 'style/theme'

debug.enable('playtwin-web:*')

export default function App({Component, pageProps}) {
  const {initialApolloState, jwtToken} = pageProps
  const apolloClient = useApollo(initialApolloState, jwtToken)

  return (
    <AuthProvider jwtToken={jwtToken}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}
