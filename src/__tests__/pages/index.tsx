import React from 'react'
import IndexPage from '@pages/index'
import {render, screen} from '@testing-library/react'
import {withAuthProvider} from '__mocks__'

const Mocked = withAuthProvider(IndexPage)

test('renders correctly', () => {
  render(<Mocked />)
  expect(screen.findByDisplayValue('Landing Page')).toBeDefined()
})
