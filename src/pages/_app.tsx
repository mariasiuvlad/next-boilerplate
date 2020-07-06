import GQLProvider from '@lib/graphql/GQLProvider'
import '../styles/index.css'
import Head from 'next/head'
import ProvideAuth from '@context/auth'

export default function App({Component, pageProps}) {
  const {initialAuthState, initialApolloState} = pageProps

  return (
    <ProvideAuth value={initialAuthState}>
      <GQLProvider initialApolloState={initialApolloState}>
        <Head>
          <title>(Playtwin)</title>
        </Head>
        <Component {...pageProps} />
      </GQLProvider>
    </ProvideAuth>
  )
}
