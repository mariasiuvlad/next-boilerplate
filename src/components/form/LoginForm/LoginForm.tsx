import {LoginFormProps} from './config'
import {ErrorMessage} from '@hookform/error-message'
import FormError from '../components/FormError'
import SubmitButton from '../components/SubmitButton'

export default function LoginForm({
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}: LoginFormProps) {
  const {email, password} = inputs

  return (
    <form onSubmit={onSubmit}>
      <section className="mb-4">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>
      <section className="mb-4">
        {email.Label}
        {email.Input}
        {email.Error}
      </section>
      <section className="mb-4">{password.Control}</section>
      <div className="flex items-center justify-between mb-5">
        <SubmitButton isSubmitting={isSubmitting}>login</SubmitButton>
      </div>
    </form>
  )
}
