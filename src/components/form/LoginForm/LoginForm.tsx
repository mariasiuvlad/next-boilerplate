import {LoginFormProps} from './config'
import {ErrorMessage} from '@hookform/error-message'
import Button from '@atom/Button'
import FormError from '@atom/FormError'

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
    <form className="bg-gray-800 rounded-lg p-8" onSubmit={onSubmit}>
      <h1 className="text-4xl text-center text-white mb-8">Welcome Back</h1>
      <section className="mb-4">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>
      <section className="mb-4">
        {email.Label}
        {email.Input}
        {email.Error}
      </section>
      <section className="mb-4">{password.Control}</section>
      <div className="flex items-center justify-center mt-8">
        <Button disabled={isSubmitting} variant="primary" label="Login" />
      </div>
    </form>
  )
}
