import {SignupFormProps} from './config'
import {ErrorMessage} from '@hookform/error-message'
import FormError from '../components/FormError'

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
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          register
        </button>
      </div>
    </form>
  )
}

export default SignupForm
