import {render} from '@testing-library/react'
import TextInput from './TextInput'

jest.mock('next/link', () => {
  return ({children}) => {
    return children
  }
})

test('it renders', () => {
  const tree = render(<TextInput icon="facebook" />)
  expect(tree).toMatchSnapshot()
})
