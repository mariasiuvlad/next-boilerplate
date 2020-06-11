import axios from 'axios'
import {createContext} from 'react'

const AUTH_API = 'http://localhost:3000'

export async function login(email: string, password: string) {
  const url = `${AUTH_API}/auth/login`
  return axios.post(url, {email, password}, {withCredentials: true})
}

export async function logout() {
  const url = `${AUTH_API}/auth/logout`
  return axios.post(url, {all: true}, {withCredentials: true})
}

export async function refresh(extraHeaders = {}) {
  const url = `${AUTH_API}/auth/token/refresh`
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    ...extraHeaders,
  }
  return axios.get(url, {withCredentials: true, headers})
}

export async function refreshToken(ctx) {
  const Cookie = ctx.req.headers.cookie
  try {
    const {data, headers} = await refresh({Cookie})
    // update refresh token
    ctx.res.setHeader('Set-cookie', headers['set-cookie'])
    return data.jwt_token
  } catch (error) {
    console.log('failed to refresh token', error.message)
    // console.error(error)
  }
  return ''
}
