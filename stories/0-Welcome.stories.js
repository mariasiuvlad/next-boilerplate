import React from 'react'
import {linkTo} from '@storybook/addon-links'
import {Welcome} from '@storybook/react/demo'

export default {
  title: 'Welcome',
  component: Welcome,
}

export const ToStorybook = () => (
  <div>
    <p1 className="text-2xl">Welcome to PlayTwin</p1>
    <ul className="mt-4">
      <li>
        <button onClick={linkTo('Button Example')}>Buttons</button>
      </li>
      <li>
        <button onClick={linkTo('Icons')}>Icons</button>
      </li>
    </ul>
  </div>
)

ToStorybook.story = {
  name: 'Index',
}
