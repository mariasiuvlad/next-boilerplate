import React from 'react'

export default function Button({children}) {
  return (
    <button className="bg-transparent font-thin text-sm text-yellow-500 hover:text-white py-2 px-8 border border-yellow-500 rounded-full">
      {children}
    </button>
  )
}
