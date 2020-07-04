import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {TRegisterRequestData} from '@lib/api/auth/types'
import {ErrorMessage} from '@hookform/error-message'

const SignupForm = ({signup}) => {
  const {register, handleSubmit, setError, errors, reset} = useForm<
    TRegisterRequestData
  >()

  const onSubmit = useCallback(
    async ({email, password}: TRegisterRequestData) => {
      signup({email, password}).then(
        () => reset(),
        ({message}) => setError('email', {type: 'manual', message})
      )
    },
    []
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-md font-light mb-2" htmlFor="email-input">
          Email
        </label>
        <input
          className="input"
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
        <label
          className="block text-md font-light mb-2"
          htmlFor="password-input"
        >
          password
        </label>
        <input
          className="input"
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
        <button
          className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          REGISTER
        </button>
      </div>
    </form>
  )
}

export default SignupForm
