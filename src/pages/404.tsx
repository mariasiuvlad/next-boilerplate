const Custom404: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-6xl mb-8">Wrong turn!</h1>
      <h2 className="text-4xl">
        <span className="text-5xl">
          <span className="text-yellow-500">404 </span>|&nbsp;
        </span>
        Nothing to see here
      </h2>
    </div>
  )
}

export default Custom404
