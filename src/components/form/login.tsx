import {useContext, useCallback} from 'react'
import {useForm} from 'react-hook-form'
import AuthStore from '@state/auth'
import {Input, Button} from '@chakra-ui/core'

type LoginData = {
  email: string
  password: string
}

const LoginForm = () => {
  const {register, handleSubmit} = useForm<LoginData>()
  const {actionCreators: authActions} = useContext(AuthStore)

  const onSubmit = useCallback(
    async ({email, password}: LoginData) => authActions.login(email, password),
    []
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        id="email"
        name="email"
        ref={register({required: true})}
      />
      <Input
        type="password"
        id="password"
        name="password"
        ref={register({required: true})}
      />
      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm
