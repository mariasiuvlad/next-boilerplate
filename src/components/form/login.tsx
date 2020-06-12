import {useContext, useCallback} from 'react'
import {useForm} from 'react-hook-form'
import AuthStore from '@state/auth'
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
} from '@chakra-ui/core'

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
    <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          ref={register({required: true})}
          aria-describedby="email-helper-text"
        />
        <FormHelperText id="email-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Password</FormLabel>
        <Input
          type="password"
          id="password"
          name="password"
          ref={register({required: true})}
        />
      </FormControl>
      <FormControl>
        <Button type="submit">Login</Button>
      </FormControl>
    </Stack>
  )
}

export default LoginForm
