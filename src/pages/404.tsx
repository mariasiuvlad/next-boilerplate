import {withProvideAuth} from '@context/auth'

const Custom404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
      <h1 className="text-6xl mb-8">Wrong turn!</h1>
      <h2 className="text-4xl">404 | Nothing to see here...</h2>
    </div>
  )
}

export default withProvideAuth(Custom404)
