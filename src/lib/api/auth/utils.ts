import * as AuthAPI from '@lib/api/auth'
import {TJWTToken} from './types'

/**
 * @description Refresh the token server side and set cookies on the response
 * @param ctx ServerSide NextPage context
 * @returns a new jwt token
 */
export async function refreshToken(ctx): Promise<TJWTToken | null> {
  let tokenRef = null
  let cookies = ctx?.req?.headers?.cookie
  const extraHeaders = cookies ? {Cookie: cookies} : {}
  await AuthAPI.refresh(extraHeaders)
    .then(({token, headers}) => {
      // set new refresh token on Context Response
      ctx.res.setHeader('Set-cookie', headers['set-cookie'])
      // return token
      tokenRef = token
    })
    .catch((e) => {
      console.warn('failed to refresh token - skipping')
    })
  return tokenRef
}
