import {renderHook} from '@testing-library/react-hooks'
import {useAuth} from './useAuth'
import {MockedProvider} from '@apollo/react-testing'

const wrapper = ({children}) => <MockedProvider>{children}</MockedProvider>

test('use auth', async () => {
  const {result: auth} = renderHook(() => useAuth(), {wrapper})

  // test initial state
  expect(auth.current.initialized).toBe(false)
  expect(auth.current.loading).toBe(false)
  expect(auth.current.data).toBe(null)

  /** @TODO test actions */
})
