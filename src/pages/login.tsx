import LoginForm from '@components/form/LoginForm'
import Layout from '@organism/Layout'

const Login = () => (
  <div className="container max-w-md lg:my-16">
    <LoginForm />
  </div>
)

Login.getLayout = Layout

export default Login
