import Logo from './Logo'
import React from 'react'
import {render} from '@testing-library/react'

jest.mock('next/link', () => {
  return ({children}) => {
    return children
  }
})

test('Logo image render', () => {
  const tree = render(<Logo />)
  expect(tree).toMatchSnapshot()
})
