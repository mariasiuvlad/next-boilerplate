import {ErrorMessage} from '@hookform/error-message'
import {UseTextInput} from '../types'
import FormLabel from './FormLabel'
import FormError from './FormError'
import TextInput from '@components/TextInput'

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
  const Input = <TextInput id={id} type={type} name={name} placeholder={placeholder} ref={ref} />
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
