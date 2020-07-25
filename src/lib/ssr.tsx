import {NextPageContext} from 'next'
import {initializeApollo} from '@lib/graphql/apolloClient'
import {TJWTToken} from '@lib/api/auth/types'
import * as AuthAPI from '@lib/api/auth'
import {AuthState} from '@context/auth/state'
import {IProvideAuthState} from '@context/auth/types'
import {NormalizedCacheObject} from 'apollo-cache-inmemory'

export type ServerSideProps = {
  initialAuthState: IProvideAuthState
  initialApolloState: NormalizedCacheObject
}

/**
 * @description Refresh the token server side and set cookies on the response
 * @param ctx ServerSide NextPage context
 * @returns a new jwt token
 */
export async function refreshToken(ctx: NextPageContext): Promise<TJWTToken | null> {
  let tokenRef = null
  const cookies = ctx?.req?.headers?.cookie
  const extraHeaders = cookies ? {Cookie: cookies} : {}
  await AuthAPI.refresh(extraHeaders)
    .then(({token, headers}) => {
      // set new refresh token on Context Response
      ctx.res.setHeader('Set-cookie', headers['set-cookie'])
      // return token
      tokenRef = token
    })
    .catch(() => console.warn('failed to refresh token - skipping'))
  return tokenRef
}

/**
 * @description Refresh auth using the `refetch_token` from the SSR Request context
 * @param ctx
 * @param props
 */
export const refreshAuth = async (ctx, props = {}) => {
  const response = await refreshToken(ctx)
  return {
    ...props,
    initialAuthState: AuthState.Authenticated(response),
  }
}

/**
 * @description Preload apollo data
 * @param ctx
 * @param props
 */
export const preloadApolloData = async (props, queries = []) => {
  // this is only needed for authenticated queries
  const jwtToken = props.initialAuthState?.data?.jwt_token
  const apolloClient = initializeApollo({jwtToken})
  try {
    // prefetch data here
    await Promise.all(queries.map((query) => apolloClient.query({query})))
  } catch (error) {
    console.warn('Apollo data prefetch failed - skipped')
  }

  return {...props, initialApolloState: apolloClient.cache.extract()}
}
