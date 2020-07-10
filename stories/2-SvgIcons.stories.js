import React from 'react'
import '../src/styles/index.css'
import CottonCandyIcon from '@components/Icons/cotton-candy.svg'

export default {
  title: 'SVG Icons',
}

export const SmallSVGIcon = () => (
  <div className="bg-pink-400 rounded-full inline-block p-4 border border-gray-300">
    <CottonCandyIcon className="h-8 w-8" />
  </div>
)

export const MediumSVGIcon = () => (
  <div className="bg-pink-400 rounded-full inline-block p-8 border border-gray-300">
    <CottonCandyIcon className="h-16 w-16" />
  </div>
)
