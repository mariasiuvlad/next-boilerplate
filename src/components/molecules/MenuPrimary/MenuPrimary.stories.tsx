import React from 'react'
import {withKnobs, text} from '@storybook/addon-knobs'
import MenuPrimary from './MenuPrimary'
import {MainNavigation, AuthLinks} from '@config/menus'

export default {
  component: MenuPrimary,
  title: 'Primary Menu',
  decorators: [withKnobs],
}

export const Default = () => <MenuPrimary menu={MainNavigation} />

export const Nav = () => (
  <nav className="flex items-center border-b-4 border-gray-500 w-full justify-between">
    <div className="mr-4">
      <span className="text-3xl text-white">
        <span className="text-yellow-500">play</span>twin
      </span>
    </div>
    <MenuPrimary menu={MainNavigation} pathname={text('page', '/login')} />
    <div className="flex items-center">
      <MenuPrimary menu={AuthLinks} pathname={text('page', '/login')} />
    </div>
  </nav>
)
