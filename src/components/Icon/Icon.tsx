import {useState} from 'react'

const ERROR_URL = '/images/icons/icon-128x128.png'

export default function Icon({src, alt}) {
  const [error, setError] = useState(false)
  const handleError = () => setError(true)

  return (
    <img
      className="bg-gray-400 rounded-full"
      src={error ? ERROR_URL : src}
      alt={error ? `Error loading: ${alt}` : alt}
      onError={handleError}
    />
  )
}
