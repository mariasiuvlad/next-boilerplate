import {SignupFormProps} from './config'
import {ErrorMessage} from '@hookform/error-message'
import Button from '@atom/Button'
import FormError from '@atom/FormError'

const SignupForm = ({
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}: SignupFormProps) => {
  const {email, password} = inputs
  return (
    <form className="bg-gray-800 rounded-lg p-8" onSubmit={onSubmit}>
      <h1 className="text-2xl text-white mb-8">Sign up to Playtwin</h1>
      <div className="flex mb-8">
        <div className="flex-grow">
          <Button disabled variant="primary" label="Sign up with Facebook" icon="facebook" />
        </div>
        <div className="ml-4">
          <Button disabled variant="secondary" icon="facebook" />
        </div>
        <div className="ml-4">
          <Button disabled variant="secondary" icon="twitter" />
        </div>
      </div>
      <div className="flex text-white justify-center text-lg border-b border-yellow-500">
        <span className="-mb-4 bg-gray-800 px-4">or</span>
      </div>
      <section className="mb-4">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>
      <section className="mb-4">{email.Control}</section>
      <section className="mb-4">{password.Control}</section>
      <div className="flex items-center justify-center mt-8">
        <Button disabled={isSubmitting} variant="primary" label="Create Account" />
      </div>
    </form>
  )
}

export default SignupForm
