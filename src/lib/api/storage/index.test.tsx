// const mockAxios = jest.genMockFromModule('axios')
import {uploadAvatar} from '.'
import httpClient from '@lib/api/httpClient'

jest.mock('@lib/api/httpClient')
const mockPost = httpClient.post as jest.Mock

const data = {
  AcceptRanges: 'bytes',
  LastModified: '2020-06-27T14:21:44.000Z',
  ContentLength: 42778,
  ETag: '"6d7d72d0c28c34bfff624b52b09b1ff7"',
  ContentType: 'image/jpeg',
  Metadata: {
    filename: 'avatar.jpg',
    token: 'df44ca3a-fc1d-42d7-9336-28954db88c1f',
  },
}

test('upload avatar API call', async () => {
  mockPost.mockImplementationOnce(() => Promise.resolve({data}))
  const mockFn = jest.fn()
  const response = await uploadAvatar(null, '<userId>', mockFn)
  expect(response.data.Metadata.filename).toBe('avatar.jpg')
  expect(response.data.Metadata.token).toBe('df44ca3a-fc1d-42d7-9336-28954db88c1f')
})
