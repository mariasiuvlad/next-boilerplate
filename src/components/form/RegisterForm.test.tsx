import React from 'react'
import RegisterForm from './RegisterForm'
import {mockAuthActions} from '__mocks__'
import {AuthActionsContext} from '@context/auth'
import {render, fireEvent, screen} from '@testing-library/react'
import {useForm} from 'react-hook-form'

jest.mock('react-hook-form')
const mockUseForm = useForm as jest.Mock
const mockHandleSubmit = jest.fn()

mockUseForm.mockImplementation(() => ({
  register: jest.fn(),
  handleSubmit: mockHandleSubmit,
}))

const Mocked = () => (
  <AuthActionsContext.Provider value={mockAuthActions}>
    <RegisterForm />
  </AuthActionsContext.Provider>
)

test('renders correctly', async () => {
  render(<Mocked />)

  await fireEvent.change(screen.getByLabelText('Email'), {
    target: {value: 'email@test.com'},
  })
  await fireEvent.change(screen.getByLabelText('Password'), {
    target: {value: 'secret12'},
  })
  await fireEvent.click(screen.getByRole('button'))
  expect(mockHandleSubmit).toBeCalled()
})
