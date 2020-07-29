import {useForm} from 'react-hook-form'
import useInput from './useInput'

export default function FormContainer({render: Form, callback}) {
  const form = useForm()
  const {handleSubmit, reset, setError} = form
  const onSubmit = (variables) =>
    callback(variables).then(reset, (err) =>
      setError('api', {type: 'manual', message: err.message})
    )

  const textInput = useInput(form)
  const inputs = Object.values(Form.Config).map(textInput)
  return <Form form={form} inputs={inputs} onSubmit={handleSubmit(onSubmit)} />
}
