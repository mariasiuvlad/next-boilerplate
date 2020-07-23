import LoginForm from '@components/form/LoginForm'
import withPlatformRedirect from '@components/util/withPlatformRedirect'
import Layout from '@components/organisms/Layout'
import {withProvideAuth} from '@context/auth'

const Login = () => (
  <Layout>
    <div className="container max-w-sm my-16">
      <LoginForm />
    </div>
  </Layout>
)

export default withProvideAuth(withPlatformRedirect(Login))
