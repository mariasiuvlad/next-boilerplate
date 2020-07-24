import {withLayout} from '@organism/Layout'
import {withProvideAuth} from '@context/auth'
import withSilentRefresh from '@components/util/withSilentRefresh'

const IndexPage = () => (
  <div className="flex flex-col items-center text-white mt-16">
    <h1 className="text-3xl mb-8">Landing Page</h1>
    <h2>Coming soon...</h2>
  </div>
)

export default withProvideAuth(withLayout(withSilentRefresh(IndexPage)))
