const FormInput = ({id, type, name, placeholder = '', label, bind}) => (
  <input
    className="form-input"
    id={id}
    type={type}
    name={name}
    placeholder={placeholder || label}
    ref={bind}
  />
)

export default FormInput
