import {renderHook, act} from '@testing-library/react-hooks'
import {useAvatarUpload} from './useAvatarUpload'
import {MockedProvider} from '@apollo/react-testing'
import * as FileAPI from '@lib/api/storage'
import {UpdateAvatarMock, GetUserMock} from '__mocks__'

jest.mock('@lib/api/storage')

// Get user gets refetched after update avatar
const mocks = [UpdateAvatarMock, GetUserMock, GetUserMock]

const wrapper = ({children}) => (
  <MockedProvider mocks={mocks}>{children}</MockedProvider>
)

test('should correctly handle file upload', async () => {
  FileAPI.uploadAvatar.mockImplementation((file, userId, onUploadProgress) => {
    onUploadProgress({loaded: 200, total: 1000})
    return Promise.resolve({request: {responseURL: '<Avatar URL>'}})
  })

  const {result} = renderHook(() => useAvatarUpload(), {wrapper})
  // initial state
  expect(result.current.error).toBe(undefined)
  expect(result.current.loading).toBe(false)
  expect(result.current.progress).toBe(0)

  const promise = result.current.upload(null)

  await act(async () => {
    // loading state
    expect(result.current.loading).toBe(true)
    expect(result.current.progress).toBe(20)
    await promise
  })

  // state resets after succesful upload
  expect(result.current.error).toBe(undefined)
  expect(result.current.loading).toBe(false)
  expect(result.current.progress).toBe(0)
})

test('should correctly handle errors', async () => {
  FileAPI.uploadAvatar.mockImplementation((file, userId, onUploadProgress) => {
    onUploadProgress({loaded: 200, total: 1000})
    return Promise.reject(new Error('Test Error'))
  })

  const {result} = renderHook(() => useAvatarUpload(), {wrapper})
  const promise = result.current.upload(null)

  await act(async () => {
    expect(result.current.loading).toBe(true)
    expect(result.current.progress).toBe(20)
    await promise
  })

  expect(result.current.error.message).toEqual('Test Error')
  expect(result.current.loading).toBe(false)
  expect(result.current.progress).toBe(0)
})
