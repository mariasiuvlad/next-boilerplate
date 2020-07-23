import {ErrorMessage} from '@hookform/error-message'
import {UseInput, InputConfig} from '../types'
import FormLabel from './FormLabel'
import FormError from './FormError'
import TextInput from '@components/TextInput'
import Select from './Select'

function createInput(config: InputConfig, ref) {
  const {type, id, placeholder, name, options} = config
  switch (type) {
    case 'select':
      return <Select name={name} id={id} options={options} ref={ref} />
    default:
      return <TextInput id={id} name={name} placeholder={placeholder} ref={ref} />
  }
}

// creates components specific to a text input
const useInput = ({register, errors}) => (config: InputConfig): UseInput => {
  const {id, label, name, bind} = config
  const ref = register(bind)
  const Label = <FormLabel id={id} label={label} />
  const Input = createInput(config, ref)
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
    name,
  }
}

export default useInput
