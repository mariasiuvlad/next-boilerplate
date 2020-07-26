import {FormProps, UseInput, InputConfig} from '../types'
import {TLoginRequestData} from '@lib/api/auth/types'

export interface LoginFormValues extends TLoginRequestData {
  api: string
}

export interface LoginFormProps extends FormProps<LoginFormValues> {
  inputs: UseInput[]
}

export const EMAIL_CONFIG: InputConfig = {
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

export const PASSWORD_CONFIG: InputConfig = {
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
