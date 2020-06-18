export default function UserCredentialsForm({register, onSubmit, type}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-md font-light mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
          id="loginEmail"
          type="email"
          name="email"
          placeholder="email@example.com"
          ref={register}
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-light mb-2" htmlFor="email">
          Password
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
          id="loginPassword"
          type="password"
          name="password"
          ref={register({required: true})}
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
