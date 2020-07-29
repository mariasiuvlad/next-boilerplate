import React from 'react'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Select from './Select'

const selectOptions = [
  {value: '1', label: 'Red'},
  {value: '2', label: 'Blue'},
]

test('it renders', () => {
  const {container} = render(<Select name="testSelect" id="testSelect" />)
  expect(container.textContent).toBe('')
})

test('it renders with options', () => {
  render(<Select name="testSelect" id="testSelect" options={selectOptions} />)
  expect(screen.getByDisplayValue('Red')).toBeInTheDocument()
})

test('it can switch between options', async () => {
  render(<Select name="testSelect" id="testSelect" options={selectOptions} />)
  fireEvent.click(screen.getByDisplayValue('Red')) // open select
  waitFor(() => fireEvent.click(screen.getByDisplayValue('Blue'))) // select Blue
  waitFor(() => expect(screen.getByDisplayValue('Red')).toBeInTheDocument())
})
