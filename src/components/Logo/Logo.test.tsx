import Logo from './Logo'
import React from 'react'
import {render} from '@testing-library/react'

test('Logo image render', () => {
  const tree = render(<Logo />)
  expect(tree).toMatchSnapshot()
})
