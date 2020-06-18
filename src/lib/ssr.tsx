import {refreshToken} from './api/auth/utils'
import {initializeApollo} from './graphql/apolloClient'
import initialState from '@context/auth/initialState'

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
