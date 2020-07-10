import {FormProps, UseTextInput} from '../types'
import {TRegisterRequestData} from '@lib/api/auth/types'

export interface SignupFormValues extends TRegisterRequestData {
  api: string
}

export interface SignupFormProps extends FormProps<SignupFormValues> {
  inputs: {
    email: UseTextInput
    password: UseTextInput
  }
}

export const EMAIL_CONFIG = {
  label: 'email',
  placeholder: 'email@example.com',
  type: 'email',
  name: 'email',
  id: 'email',
  bind: {
    required: 'Email is required',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Entered value does not match email format',
    },
  },
}

export const PASSWORD_CONFIG = {
  label: 'password',
  placeholder: 'Enter your password',
  type: 'password',
  name: 'password',
  id: 'password',
  bind: {
    required: 'Password is required.',
    minLength: {
      value: 5,
      message: 'min length is 5',
    },
  },
}