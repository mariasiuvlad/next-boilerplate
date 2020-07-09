import React from 'react'
import Icon from './Icon'

const iconURL = 'https://static.thenounproject.com/png/629576-200.png'

export default {
  title: 'Icon example',
}

export const Basic = () => <Icon src={iconURL} alt="Profile Icon" />
export const ErrorIcon = () => (
  <Icon src="httpXY://invalid image" alt="Invalid image" />
)
