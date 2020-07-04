import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {TRegisterRequestData} from '@lib/api/auth/types'
import {ErrorMessage} from '@hookform/error-message'

const LoginForm = ({login}) => {
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: {isSubmitting},
  } = useForm<TRegisterRequestData>()

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
      <div className="mb-4">
        <label className="form-label" htmlFor="email-input">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email-input"
          placeholder="email@example.com"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({message}) => (
            <p className="form-error" role="alert">
              {message}
            </p>
          )}
        />
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="password-input">
          password
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          id="password-input"
          ref={register({
            required: 'Password is required.',
            minLength: {
              value: 5,
              message: 'min length is 5',
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({message}) => (
            <p className="form-error" role="alert">
              {message}
            </p>
          )}
        />
      </div>

      <div className="flex items-center justify-between mb-5">
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
