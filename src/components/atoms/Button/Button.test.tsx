import React from 'react'
import Button from './Button'
import {fireEvent, screen, render} from '@testing-library/react'

const onClick = jest.fn()

test('fires callback', () => {
  render(<Button onClick={onClick} label="Test Button" />)
  fireEvent.click(screen.getByText('Test Button'))
  expect(onClick).toHaveBeenCalled()
})
