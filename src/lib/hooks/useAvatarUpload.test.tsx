import {renderHook, act} from '@testing-library/react-hooks'
import {useAvatarUpload} from './useAvatarUpload'
import {MockedProvider} from '@apollo/react-testing'

const wrapper = ({children}) => <MockedProvider>{children}</MockedProvider>

test('should increment counter', async () => {
  const {result} = renderHook(() => useAvatarUpload(), {wrapper})

  // test initial state
  expect(result.current.error).toBe(undefined)
  expect(result.current.loading).toBe(false)
  expect(result.current.progress).toBe(0)

  await act(async () => {
    await result.current.upload(null)
  })

  expect(result.current.error).not.toBe(undefined)
})
