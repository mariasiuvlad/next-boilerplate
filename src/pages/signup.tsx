import SignupForm from '@components/form/SignupForm'
import Layout from '@components/Layout'
import withPlatformRedirect from '@components/util/withPlatformRedirect'
import {withProvideAuth} from '@context/auth'

const RegisterPage = () => {
  return (
    <Layout>
      <div className="container max-w-md my-16">
        <SignupForm />
      </div>
    </Layout>
  )
}

export default withProvideAuth(withPlatformRedirect(RegisterPage))
