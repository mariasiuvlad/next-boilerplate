import Head from 'next/head'
import '../styles/global.css'

interface AppProps {
  Component: React.FC
  pageProps: unknown
}

export default function App({Component, pageProps}: AppProps): React.FC {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
