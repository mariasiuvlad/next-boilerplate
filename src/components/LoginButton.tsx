import {useContext, useCallback} from 'react'
import AuthStore from '@state/auth'
import {Button} from '@chakra-ui/core'

const LoginButton = () => {
  const {actionCreators: authActions} = useContext(AuthStore)
  const handleLogin = useCallback(
    async () => authActions.login('mariasiuvlad@gmail.com', 'secret12'),
    []
  )
  return <Button onClick={handleLogin}>Auto login</Button>
}

export default LoginButton
