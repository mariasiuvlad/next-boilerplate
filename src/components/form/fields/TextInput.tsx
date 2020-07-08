import {ErrorMessage} from '@hookform/error-message'

const TextInput = ({
  errors,
  bind,
  label,
  name,
  placeholder = '',
  type = 'text',
  id = `id-${Math.random()}`,
}) => {
  return (
    <div className="mb-4">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder || label}
        ref={bind}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => (
          <p className="form-error" role="alert">
            {message}
          </p>
        )}
      />
    </div>
  )
}

export default TextInput
