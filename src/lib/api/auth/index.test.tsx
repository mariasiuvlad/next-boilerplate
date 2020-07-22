import {login, refresh, signup, logout} from '.'
import httpClient from '@lib/api/httpClient'
import {LoginResponseMock} from '__mocks__'

jest.mock('@lib/api/httpClient')
const mockPost = httpClient.post as jest.Mock
const mockGet = httpClient.get as jest.Mock

const response = {
  data: LoginResponseMock,
  headers: {
    refresh_token: '<Mock Refresh Token>',
  },
}

test('login API call', async () => {
  mockPost.mockImplementationOnce(() => Promise.resolve(response))
  const {jwt_token, jwt_expires_in} = await login({
    email: 'email',
    password: 'password',
  })
  expect(jwt_token).toBe('<Mock JWTToken>')
  expect(jwt_expires_in).toBe(900000)
})

test('register API call', async () => {
  mockPost.mockImplementationOnce(() => Promise.resolve({data: {}}))
  const res = await signup({
    email: 'email',
    password: 'password',
  })
  expect(res).toEqual({})
})

test('logout API call', async () => {
  mockPost.mockImplementationOnce(() => Promise.resolve({data: {}}))
  const res = await logout()
  expect(res).toEqual({})
})

test('refresh API call', async () => {
  mockGet.mockImplementationOnce(() => Promise.resolve(response))
  const {
    token: {jwt_token, jwt_expires_in},
    headers,
  } = await refresh()
  expect(jwt_token).toBe('<Mock JWTToken>')
  expect(jwt_expires_in).toBe(900000)
  expect(headers.refresh_token).toBe('<Mock Refresh Token>')
})
