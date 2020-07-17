import {SignupFormProps} from './config'
import {ErrorMessage} from '@hookform/error-message'
import FormError from '../components/FormError'
import SubmitButton from '../components/SubmitButton'

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
    <form onSubmit={onSubmit}>
      <section className="mb-4">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>
      <section className="mb-4">{email.Control}</section>
      <section className="mb-4">{password.Control}</section>
      <div className="flex items-center justify-between mb-5">
        <SubmitButton isSubmitting={isSubmitting}>signup</SubmitButton>
      </div>
    </form>
  )
}

export default SignupForm
