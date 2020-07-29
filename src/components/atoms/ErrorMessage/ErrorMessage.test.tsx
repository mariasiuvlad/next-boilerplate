import React from 'react'
import Error from './ErrorMessage'
import {render} from '@testing-library/react'

test('renders the error', () => {
  const {container} = render(<Error error={{message: '<Error message>'}} />)
  // renders logout button
  expect(container.textContent).toBe('error: ' + JSON.stringify({message: '<Error message>'}))
})
