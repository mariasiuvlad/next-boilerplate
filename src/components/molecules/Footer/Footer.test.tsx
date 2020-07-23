import React from 'react'
import {render} from '@testing-library/react'
import Footer from './Footer'

jest.mock('next/link', () => {
  return ({children}) => {
    return children
  }
})

test('it renders', () => {
  const tree = render(<Footer />)
  expect(tree).toMatchSnapshot()
})
