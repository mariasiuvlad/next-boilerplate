import LoginForm from '@components/form/LoginForm'
import Link from 'next/link'
import withPlatformRedirect from '@components/util/withPlatformRedirect'
import {useAuth} from '@lib/hooks'
import Layout from '@components/Layout'

const AutoLoginButton = () => {
  const {
    actions: {login},
  } = useAuth()
  return (
    <button
      onClick={() => login('mariasiuvlad@gmail.com', 'secret12')}
      className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500"
    >
      or Auto Login
    </button>
  )
}

const Login = () => (
  <Layout>
    <LoginForm />
    <Link href="/register">
      <a className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500 mr-6">
        or Register
      </a>
    </Link>
    <AutoLoginButton />
  </Layout>
)

export default withPlatformRedirect(Login)
