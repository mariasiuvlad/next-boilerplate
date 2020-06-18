import LoginForm from '@components/form/LoginForm'
import Link from 'next/link'
import withPlatformRedirect from '@components/util/withPlatformRedirect'
import {useAuthActions} from '@lib/hooks'
import {GetServerSideProps} from 'next'
import {refreshAuth} from '@lib/ssr'
import Layout from '@components/Layout'

const AutoLoginButton = () => {
  const {login} = useAuthActions()
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let props: any = await refreshAuth(ctx)
  return {props}
}

export default withPlatformRedirect(Login)
