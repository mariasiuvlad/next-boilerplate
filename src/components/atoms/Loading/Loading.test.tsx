import React from 'react'
import Loading from './Loading'
import {render} from '@testing-library/react'

test('renders loading message', () => {
  const {container} = render(<Loading />)
  expect(container.textContent).toBe('')
})
