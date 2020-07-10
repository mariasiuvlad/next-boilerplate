import {UseFormMethods} from 'react-hook-form'

export interface UseTextInput {
  Label: JSX.Element
  Input: JSX.Element
  Error: JSX.Element
  Control: JSX.Element
}

export interface FormProps<T> {
  onSubmit: () => Promise<any>
  form: UseFormMethods<T>
}
