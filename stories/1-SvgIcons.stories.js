import React from 'react'
import '../src/styles/index.css'
import CottonCandyIcon from '@components/Icons/cotton-candy.svg'
import AlienIcon from '@components/Icons/ptw_alien.svg'
import CoinIcon from '@components/Icons/ptw_home.svg'
import NotificationIcon from '@components/Icons/ptw_notification.svg'
import RocketIcon from '@components/Icons/ptw_rocket.svg'

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

export const PlaytwinIcons = () => (
  <div className="flex bg-pink-400 rounded-full p-8 border border-gray-300">
    <AlienIcon className="h-8 w-8" />
    <CoinIcon className="h-8 w-8" />
    <NotificationIcon className="h-8 w-8" />
    <RocketIcon className="h-8 w-8" />
  </div>
)
