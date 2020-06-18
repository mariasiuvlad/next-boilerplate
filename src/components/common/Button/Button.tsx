import React from 'react'

export default function Button({text}) {
  return (
    <button
      className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      {text}
    </button>
  )
}
