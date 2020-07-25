import SignupForm from '@components/form/SignupForm'
import Layout from '@organism/Layout'

const SignupPage = () => {
  return (
    <div className="container max-w-md my-16">
      <SignupForm />
    </div>
  )
}

SignupPage.getLayout = Layout

export default SignupPage
