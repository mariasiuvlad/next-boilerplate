import React from 'react'
import {addDecorator} from '@storybook/react'

addDecorator((storyFn) => <div className="p-10">{storyFn()}</div>)
addDecorator((storyFn) => (
  <div className="w-screen h-screen bg-playtwinGray">{storyFn()}</div>
))
