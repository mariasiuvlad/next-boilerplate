import SignupForm from '@components/form/SignupForm'
import Link from 'next/link'
import Layout from '@components/Layout'
import withPlatformRedirect from '@components/util/withPlatformRedirect'

const RegisterPage = () => {
  return (
    <Layout>
      <SignupForm />
      <Link href="/login">
        <a className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500">
          or Login
        </a>
      </Link>
    </Layout>
  )
}

export default withPlatformRedirect(RegisterPage)
