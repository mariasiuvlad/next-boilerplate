import Layout from '@organism/Layout'
import {withProvideAuth} from '@context/auth'

const IndexPage = () => (
  <Layout>
    <div className="flex flex-col items-center text-white mt-16">
      <h1 className="text-3xl mb-8">Landing Page</h1>
      <h2>Coming soon...</h2>
    </div>
  </Layout>
)

export default withProvideAuth(IndexPage)
