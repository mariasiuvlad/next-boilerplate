import {ErrorMessage} from '@hookform/error-message'
import {UseTextInput} from '../types'
import FormLabel from './FormLabel'
import FormInput from './FormInput'
import FormError from './FormError'

// creates components specific to a text input
const useTextInput = ({register, errors}) => ({
  id,
  label,
  type,
  name,
  placeholder,
  bind,
}): UseTextInput => {
  const ref = register(bind)
  const Label = <FormLabel id={id} label={label} />
  const Input = (
    <FormInput
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      label={label}
      bind={ref}
    />
  )
  const Error = <ErrorMessage errors={errors} name={name} render={FormError} />
  const Control = (
    <>
      {Label}
      {Input}
      {Error}
    </>
  )
  return {
    Label,
    Input,
    Error,
    Control,
  }
}

export default useTextInput
