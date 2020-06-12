import React from 'react'
import Head from 'next/head'
import Header from './header'
import {Flex} from '@chakra-ui/core'

const Layout = ({children}) => (
  <React.Fragment>
    <Head>
      <title>PlayTwin</title>
    </Head>
    <Header />
    <Flex as="main" flex={1} p={8} bg="pink">
      <Flex flex={1} className="container">
        {children}
      </Flex>
    </Flex>
  </React.Fragment>
)

export default Layout
