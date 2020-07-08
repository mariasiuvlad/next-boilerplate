import LoginForm from '@components/form/LoginForm'
import Link from 'next/link'
import withPlatformRedirect from '@components/util/withPlatformRedirect'
import Layout from '@components/Layout'
import {withProvideAuth} from '@context/auth'

const Login = () => (
  <Layout>
    <LoginForm />
    <Link href="/signup">
      <a className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500 mr-6">
        or Register
      </a>
    </Link>
  </Layout>
)

export default withProvideAuth(withPlatformRedirect(Login))
