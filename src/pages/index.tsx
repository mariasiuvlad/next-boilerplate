import Layout from '@components/Layout'
import {withProvideAuth} from '@context/auth'

const IndexPage = () => (
  <Layout>
    <div className="bg-gray-100">
      <h1>Landing Page</h1>
    </div>
  </Layout>
)

export default withProvideAuth(IndexPage)
