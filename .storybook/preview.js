import React from 'react'
import {addDecorator, addParameters} from '@storybook/react'
import {themes} from '@storybook/theming'

// import tailwind
import '../src/styles/global.css'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)

addParameters({
  backgrounds: [
    {
      name: 'dark',
      value: fullConfig.theme.colors.gray[700],
      default: true,
    },
    {name: 'light', value: fullConfig.theme.colors.gray[300]},
  ],
})

addParameters({
  options: {
    theme: themes.dark,
  },
})

addDecorator((storyFn) => <div className="p-10 flex justify-center">{storyFn()}</div>)
