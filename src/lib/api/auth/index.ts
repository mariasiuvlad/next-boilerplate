import axios from 'axios'
import {HBP_API} from 'config'
import {
  TLoginRequestData,
  TLoginResponseData,
  TRefreshResponse,
  TRegisterRequestData,
} from './types'

const httpClient = axios.create({
  baseURL: HBP_API,
  timeout: 10000,
  withCredentials: true,
})

/**
 * @description Make a login request
 * @param payload Contains login credentials
 */
export function login(payload: TLoginRequestData) {
  return httpClient
    .post<TLoginResponseData>('/auth/login', payload)
    .then(({data}) => data)
}

/**
 * @description Make a registration request
 * @param payload Contains registration credentials
 */
export function register(payload: TRegisterRequestData) {
  httpClient
    .post<TLoginResponseData>('/auth/register', payload)
    .then(({data}) => data)
}

/**
 * @description Clear `refresh_token` and `permission_variables` cookies
 * @param all Indicate whether to delete all refresh tokens to this user or not
 */
export function logout(all = false) {
  return httpClient.post<{}>('/auth/logout', {all})
}

/**
 * @description Get a new token
 * @param all Indicate whether to delete all refresh tokens to this user or not
 */
export function refresh(extraHeaders = {}) {
  return httpClient
    .get<TLoginResponseData>('/auth/token/refresh', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        ...extraHeaders,
      },
    })
    .then(
      ({data, headers}): TRefreshResponse => ({
        token: data,
        headers,
      })
    )
}
