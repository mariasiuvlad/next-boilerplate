import {useCallback} from 'react'
import {TRegisterRequestData} from '@lib/api/auth/types'
import TextInput from '../fields/TextInput'

const LoginForm = ({
  login,
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
    async ({email, password}: TRegisterRequestData) => {
      login(email, password).then(
        () => reset(),
        ({message}) => setError('email', {type: 'manual', message})
      )
    },
    []
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Email"
        placeholder="email@example.com"
        type="email"
        name="email"
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
        label="Password"
        type="password"
        name="password"
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
          login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
