import RegisterForm from '@components/form/RegisterForm'
import Link from 'next/link'
import Layout from '@components/Layout'
import withPlatformRedirect from '@components/util/withPlatformRedirect'

const RegisterPage = () => {
  return (
    <Layout>
      <RegisterForm />
      <Link href="/login">
        <a>or Login</a>
      </Link>
    </Layout>
  )
}

export default withPlatformRedirect(RegisterPage)
