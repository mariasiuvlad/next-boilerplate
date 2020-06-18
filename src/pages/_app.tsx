import {AuthProvider} from '@context/auth'
import GQLProvider from '@lib/graphql/GQLProvider'
import '../styles/index.css'
import Head from 'next/head'

export default function App({Component, pageProps}) {
  const {initialAuthState, initialApolloState} = pageProps

  return (
    <AuthProvider initialAuthState={initialAuthState}>
      <GQLProvider initialApolloState={initialApolloState}>
        <Head>
          <title>(Playtwin)</title>
        </Head>
        <Component {...pageProps} />
      </GQLProvider>
    </AuthProvider>
  )
}
