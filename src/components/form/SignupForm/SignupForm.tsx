import {useCallback} from 'react'
import {TRegisterRequestData} from '@lib/api/auth/types'
import TextInput from '../fields/TextInput'

const SignupForm = ({
  signup,
  form: {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: {isSubmitting},
  },
}) => {
  const onSubmit = useCallback(
    async ({email, password}: TRegisterRequestData) =>
      signup(email, password).then(
        () => reset(),
        ({message}) => setError('email', {type: 'manual', message})
      ),
    []
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        label="email"
        id="email"
        name="email"
        placeholder="email@example.com"
        errors={errors}
        bind={register({
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
          },
        })}
      />
      <TextInput
        label="password"
        type="password"
        name="password"
        id="password"
        errors={errors}
        bind={register({
          required: 'Password is required.',
          minLength: {
            value: 5,
            message: 'min length is 5',
          },
        })}
      />
      <div className="flex items-center justify-between mb-5">
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          register
        </button>
      </div>
    </form>
  )
}

export default SignupForm
