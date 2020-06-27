import initialState from '@context/auth/initialState'
import {initializeApollo} from '@lib/graphql/apolloClient'
import {TJWTToken} from '@lib/api/auth/types'
import * as AuthAPI from '@lib/api/auth'

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

/**
 * @description Refresh auth using the `refetch_token` from the SSR Request context
 * @param ctx
 * @param props
 */
export const refreshAuth = async (ctx, props = {}) => {
  try {
    const response = await refreshToken(ctx)
    return {
      ...props,
      initialAuthState: initialState(response, true),
    }
  } catch (error) {
    return {
      ...props,
      initialAuthState: {
        loading: false,
        initialized: true,
        isLoggedIn: false,
      },
    }
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
    return props
  }

  return {...props, initialApolloState: apolloClient.cache.extract()}
}
