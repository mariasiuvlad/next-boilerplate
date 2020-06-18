import RegisterForm from '@components/form/RegisterForm'
import Link from 'next/link'
import Layout from '@components/Layout'

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

export default RegisterPage
