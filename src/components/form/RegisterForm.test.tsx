import React from 'react'
import RegisterForm from './RegisterForm'
import {mockAuthActions} from '__mocks__'
import {AuthActionsContext} from '@context/auth'
import {render, fireEvent} from '@testing-library/react'
import {useForm} from 'react-hook-form'

jest.mock('react-hook-form')
const mockUseForm = useForm as jest.Mock
const mockHandleSubmit = jest.fn((e) => e.preventDefault)

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
  const {container} = render(<Mocked />)
  fireEvent.submit(container.querySelector('form'))
  expect(mockHandleSubmit).toHaveBeenCalledTimes(1)
})
