# Forms

## Directory structure

- `index.ts` default export
- `<FormName>/config.ts` Input configuration file
- `<FormName>/container.tsx` handles business logic
- `<FormName>/<FormName>.tsx` visual form component

## <a name="config">Configuration</a>

Consists of `InputConfig`s for each form input

### Input Config Interface

```tsx
export interface InputConfig {
  id: string
  label: string
  type: 'text' | 'email' | 'password' | 'select'
  options?: SelectOption[]
  name: string
  placeholder?: string
  // https://react-hook-form.com/api#register
  bind: Record<string, unknown>
}
```

### Example (Login Form)

```tsx
// config.ts

/** Email Input config */
export const EmailConfig: InputConfig = {
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

/** Password Input config */
export const PasswordConfig: InputConfig = {
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
```

## Container

Simply pass the form action and visual component to the FormContainer

```tsx
import {useCallback} from 'react'
import {useAuthActions} from '@context/auth'
import {TLoginRequestData} from '@lib/api/auth/types'
import FormContainer from '../components/FormContainer'
import LoginForm from './LoginForm'

export default function LoginFormContainer() {
  const {login} = useAuthActions()
  // define callback
  const callback = useCallback(
    async ({email, password}: TLoginRequestData) => login(email, password),
    []
  )

  // pass callback and visual component to FormContainer
  return <FormContainer render={LoginForm} callback={callback} />
}
```

## Visual Component

Here we can access the [configured](#config) form controls and render them inside the form (see [controls](#controls))

```tsx
import {ErrorMessage} from '@hookform/error-message'
import Button from '@atom/Button'
import FormError from '@atom/FormError'
import * as Config from './config'

export default function LoginForm({
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}) {
  return (
    <form className="rounded-lg p-8 bg-gray-800" onSubmit={onSubmit}>
      <h1 className="text-4xl text-center text-white mb-8">Welcome Back</h1>
      // async validation/api error (e.g. invalid credentials)
      <section className="mb-4">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>
      // iterate over the inputs and render them
      {inputs.map((input) => (
        <div className="my-4" key={input.name}>
          {input.Control}
        </div>
      ))}
      <div className="flex items-center justify-center mt-8">
        <Button disabled={isSubmitting} variant="primary" label="Login" />
      </div>
    </form>
  )
}

// apply config to form
LoginForm.Config = Config
```

Make sure to apply the configuration to the Form Component

```tsx
import * as Config from './config'
// ...
export default function LoginForm() {
  // ...
}
// ...
LoginForm.Config = Config
```

## <a name="controls">Form controls</a>

By default inputs are provided as an array

Accessing individual inputs

```tsx
const emailInput = inputs.find((i) => i.name === 'email')

const render = <div className="my-4">{emailInput.Control}</div>
```

Convert to object

```tsx
const inputMap = inputs.reduce((acc, input) => {
  acc[input.name] = input
  return acc
})
const emailInput = inputMap.email

const render = (
  <>
    <div className="my-4">{emailInput.Control}</div>
    <div className="my-4">{inputMap.password.Control}</div>
  </>
)
```

We can access all the parts of a form control individually

```tsx
export interface UseInput {
  Label: JSX.Element
  Input: JSX.Element
  Error: JSX.Element
  // consists of label, input and error one after the other
  Control: JSX.Element
  name: string
}
```

For example

```jsx
const render = (
  <div className="my-4" key={input.name}>
    {input.Control}
  </div>
)
```

is equivalent to

```jsx
const render = (
  <div className="my-4" key={input.name}>
    {input.Label}
    {input.Input}
    {input.Error}
  </div>
)
```
