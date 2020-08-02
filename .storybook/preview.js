import React from 'react'
import {addDecorator, addParameters} from '@storybook/react'
import {themes} from '@storybook/theming'

// import tailwind
import '../src/styles/global.css'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)

/** backgrounds */
addParameters({
  backgrounds: [
    {name: 'dark', value: fullConfig.theme.colors.gray[700]},
    {name: 'light', value: fullConfig.theme.colors.gray[300]},
  ],
})

/** enable dark theme for addons */
// addParameters({
//   options: {
//     theme: themes.dark,
//   },
// })
