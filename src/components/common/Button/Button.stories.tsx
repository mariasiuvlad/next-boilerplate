import React from 'react'
import {Button} from './Button'

export default {
  component: Button,
  title: 'Button Example',
}

export const Outline = () => (
  <Button className="btn outline" onClick={() => {}}>
    Outline
  </Button>
)

export const Default = () => (
  <Button className="btn default" onClick={() => {}}>
    Default
  </Button>
)

export const Primary = () => (
  <Button className="btn primary" onClick={() => {}}>
    Primary
  </Button>
)
