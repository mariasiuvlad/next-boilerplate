import React from 'react'
import Head from 'next/head'
import Header from './chakra-header'

const Layout = ({children}) => (
  <React.Fragment>
    <Head>
      <title>JWT auth example</title>
    </Head>
    <Header />

    <main>
      <div className="container">{children}</div>
    </main>
  </React.Fragment>
)

export default Layout
