import {useMemo} from 'react'
import {initializeApollo} from '@lib/graphql/apolloClient'

export function useApollo(initialState = {}, jwtToken = '') {
  const store = useMemo(() => initializeApollo({initialState, jwtToken}), [
    jwtToken,
  ])
  return store
}
