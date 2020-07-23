import React from 'react'
import {withKnobs} from '@storybook/addon-knobs'
import Sidebar from './Sidebar'

export default {
  component: Sidebar,
  title: 'Sidebar',
  decorators: [withKnobs],
}

export const Default = () => <Sidebar />
