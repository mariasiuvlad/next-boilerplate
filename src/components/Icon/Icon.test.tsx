import React from 'react'
import {render} from '@testing-library/react'
import Icon from './Icon'

test('renders correctly', async () => {
  const GOOD_SRC = 'https://static.thenounproject.com/png/629576-200.png'

  const {getByAltText} = render(<Icon src={GOOD_SRC} alt="Test me" />)
  const img = getByAltText('Test me')
  expect(img).toHaveProperty('src', GOOD_SRC)
})

// @todo - finish this test
// test('invlid link renders fallback', async () => {
//   const {findByAltText} = render(
//     <Icon src="httpXY://invalid image" alt="Invalid image" />
//   )
//   const img = await findByAltText('Invalid image')

//   expect(img).toHaveProperty('src', '/images/icons/icon-128x128.png')
// })
