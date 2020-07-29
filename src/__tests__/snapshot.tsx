import React from 'react'
import {render} from '@testing-library/react'

test('Testing suite is set up correctly', () => {
  const {container} = render(<p>Hello Jest!</p>)
  expect(container.textContent).toBe('Hello Jest!')
})
