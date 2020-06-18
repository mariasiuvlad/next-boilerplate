import {AxiosError} from 'axios'
import {TJWTToken} from '@lib/api/auth/types'

export type IState = {
  initialized: boolean
  loading: boolean
  isLoggedIn: boolean
  data?: TJWTToken
  error?: AxiosError
}

const initialState: (data?: TJWTToken, initialized?: boolean) => IState = (
  data = null,
  initialized = false
) => ({
  initialized,
  loading: false,
  isLoggedIn: !!data,
  data,
})

export default initialState
