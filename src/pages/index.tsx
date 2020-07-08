import Layout from '@components/Layout'
import {withProvideAuth} from '@context/auth'

const IndexPage = () => (
  <Layout>
    <h1>Landing Page</h1>
  </Layout>
)

export default withProvideAuth(IndexPage)
