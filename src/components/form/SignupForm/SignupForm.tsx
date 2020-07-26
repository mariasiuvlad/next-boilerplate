import {ErrorMessage} from '@hookform/error-message'
import Button from '@atom/Button'
import FormError from '@atom/FormError'
import * as Config from './config'

export default function SignupForm({
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}: Config.SignupFormProps) {
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
      {inputs.map((input) => (
        <div className="my-4" key={input.name}>
          {input.Control}
        </div>
      ))}
      <div className="flex items-center justify-center mt-8">
        <Button disabled={isSubmitting} variant="primary" label="Create Account" />
      </div>
    </form>
  )
}

SignupForm.Config = Config
