import React from 'react'
import TextInput from './TextInput'
import {withKnobs, text, select} from '@storybook/addon-knobs'

export default {
  component: TextInput,
  title: 'Text Input',
  decorators: [withKnobs],
}

export const Default = () => (
  <TextInput
    placeholder={text('Placeholder', '')}
    icon={select('Icon', {Facebook: 'facebook', Youtube: 'youtube', None: null}, null)}
  />
)
export const Placeholder = () => <TextInput placeholder="your thoughts?" />
export const Icon = () => <TextInput icon="rocket" />
