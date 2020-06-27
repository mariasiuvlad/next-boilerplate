export default function UserCredentialsForm({register, onSubmit, type}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-md font-light mb-2" htmlFor="email-input">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="email@example.com"
          ref={register}
          id="email-input"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-md font-light mb-2"
          htmlFor="password-input"
        >
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          ref={register({required: true})}
          id="password-input"
        />
      </div>

      <div className="flex items-center justify-between mb-5">
        <button
          className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {type === 'login' ? 'LOGIN' : 'REGISTER'}
        </button>
        {type === 'login' && (
          <a
            className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500"
            href="#"
          >
            Forgot Password?
          </a>
        )}
      </div>
    </form>
  )
}
