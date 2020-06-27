import {renderHook} from '@testing-library/react-hooks'
import {useAuth} from './useAuth'
import {MockedProvider} from '@apollo/react-testing'

const wrapper = ({children}) => <MockedProvider>{children}</MockedProvider>

test('should increment counter', async () => {
  const {result} = renderHook(() => useAuth(), {wrapper})

  // test initial state
  expect(result.current.initialized).toBe(false)
  expect(result.current.loading).toBe(false)
  expect(result.current.data).toBe(null)
})
