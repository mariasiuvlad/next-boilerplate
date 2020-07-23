import {UseFormMethods} from 'react-hook-form'
import {SelectOption} from '../atoms/Select/types'

export interface InputConfig {
  id: string
  label: string
  type: 'text' | 'email' | 'password' | 'select'
  options?: SelectOption[]
  name: string
  placeholder?: string
  bind: Record<string, unknown>
}

export interface UseInput {
  Label: JSX.Element
  Input: JSX.Element
  Error: JSX.Element
  Control: JSX.Element
  name: string
}

export interface FormProps<T> {
  onSubmit: () => Promise<void>
  form: UseFormMethods<T>
}
