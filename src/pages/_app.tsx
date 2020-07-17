import '../styles/global.css'
import Head from 'next/head'

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Playtwin</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
