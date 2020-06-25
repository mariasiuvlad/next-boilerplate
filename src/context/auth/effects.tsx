import {IState} from './initialState'
import {IActionCreators} from './types'
import {EffectCallback, DependencyList, useRef} from 'react'

type Effect = [EffectCallback, DependencyList]
type AuthEffectCreator = (state: IState, authActions: IActionCreators) => Effect
type AuthEffectsCreator = (
  state: IState,
  authActions: IActionCreators
) => [Effect]

/**
 * @description Set a timeout to refresh the token before it expires
 * @param state
 * @param authActions
 */
const refreshTokenBeforeExpiry: AuthEffectCreator = (state, authActions) => {
  const {isLoggedIn, data} = state
  const refreshHandle = useRef(null)

  /**
   * @TODO better logging
   */
  const effect: EffectCallback = () => {
    if (isLoggedIn) {
      const timeToRefresh = data.jwt_expires_in - 1000 * 30 // 30s before expiry
      console.log('[Set Timeout] RefreshToken')
      refreshHandle.current = setTimeout(authActions.refresh, timeToRefresh)
    } else {
      if (refreshHandle.current) {
        console.log('[Clear Timeout] RefreshToken')
        clearTimeout(refreshHandle.current)
      }
    }
  }
  const deps: DependencyList = [data]

  return [effect, deps]
}

/**
 * @description Create all effects
 * @param state
 * @param authActions
 */
const effects: AuthEffectsCreator = (state, authActions) => [
  refreshTokenBeforeExpiry(state, authActions),
]

export default effects
