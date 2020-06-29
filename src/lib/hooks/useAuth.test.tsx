import {renderHook} from '@testing-library/react-hooks'
import {useAuth} from './useAuth'

test('use auth', async () => {
  const {result: auth} = renderHook(() => useAuth())

  // test initial state
  expect(auth.current.initialized).toBe(false)
  expect(auth.current.loading).toBe(false)
  expect(auth.current.data).toBe(null)

  /** @TODO test actions */
})
