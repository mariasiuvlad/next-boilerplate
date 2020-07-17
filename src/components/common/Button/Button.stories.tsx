import React from 'react'
import {Button} from './Button'

export default {
  component: Button,
  title: 'Button Example',
}

export const Outline = () => (
  <Button variant="outline" onClick={() => {}}>
    Outline
  </Button>
)

export const Default = () => (
  <Button variant="default" onClick={() => {}}>
    Default
  </Button>
)

export const Primary = () => (
  <Button variant="primary" onClick={() => {}}>
    Primary
  </Button>
)
