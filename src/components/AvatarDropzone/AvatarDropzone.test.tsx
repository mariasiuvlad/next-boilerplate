import React, {useState} from 'react'
import AvatarDropzone from './AvatarDropzone'
import {MockedProvider} from '@apollo/react-testing'
import {GetUserMock} from '__mocks__'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {useAvatarUpload} from '@lib/hooks'

jest.mock('@lib/hooks')
const mockUseAvatarUpload = useAvatarUpload as jest.Mock
mockUseAvatarUpload.mockImplementation(() => {
  const [loading, setLoading] = useState(false)
  return {
    loading,
    upload: jest.fn(() => {
      setLoading(true)
    }),
  }
})

const createFile = (name, size, type) => ({
  name,
  path: name,
  size,
  type,
})

const files = [
  createFile('foo.png', 200, 'image/png'),
  createFile('bar.jpg', 200, 'image/jpeg'),
]

test('it renders empty', async () => {
  const {container} = render(
    <MockedProvider mocks={[GetUserMock]}>
      <AvatarDropzone />
    </MockedProvider>
  )
  expect(container.textContent).toMatch('')
})

test('it uploads dropped files', async () => {
  const {container, getByTestId} = render(
    <MockedProvider mocks={[GetUserMock]}>
      <AvatarDropzone>AvatarDropzone</AvatarDropzone>
    </MockedProvider>
  )
  expect(container.textContent).toMatch('AvatarDropzone')

  fireEvent.drop(getByTestId('AvatarUpload-dropzone'), {
    target: {dataTransfer: {files}},
  })

  await waitFor(() => expect(container.textContent).toMatch('loading...'))
})
