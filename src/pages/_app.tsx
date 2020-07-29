import '../styles/global.css'
import Head from 'next/head'
import ProvideAuth from '@context/auth'
import GQLProvider from '@lib/graphql/GQLProvider'
import {ServerSideProps} from '@lib/ssr'

interface AppProps {
  Component: React.FC<ServerSideProps>
  pageProps: ServerSideProps
}

const getLayout = (Component) => Component.getLayout || (({children}) => <>{children}</>)

export default function App({Component, pageProps}: AppProps) {
  const PageLayout = getLayout(Component)
  const {initialAuthState, initialApolloState} = pageProps
  return (
    <>
      <Head>
        <title>Playtwin</title>
      </Head>
      <ProvideAuth value={initialAuthState}>
        <GQLProvider initialApolloState={initialApolloState}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </GQLProvider>
      </ProvideAuth>
    </>
  )
}
