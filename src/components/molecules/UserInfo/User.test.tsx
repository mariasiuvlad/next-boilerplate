import React from 'react'
import User from '.'
import {render, waitFor} from '@testing-library/react'
import {MockedProvider} from '@apollo/react-testing'
import {GetUserMock, GetUserMockError} from '__mocks__'

test("it loads and renders the user's display name", async () => {
  const {container} = render(
    <MockedProvider mocks={[GetUserMock]}>
      <User />
    </MockedProvider>
  )
  // loading state
  expect(container.textContent).toBe('')
  // loaded state
  await waitFor(() => expect(container.textContent).toBe('mariasiuvlad@gmail.com'))
})

test('it handles errors', async () => {
  const {container} = render(
    <MockedProvider mocks={[GetUserMockError]}>
      <User />
    </MockedProvider>
  )
  // loading state
  expect(container.textContent).toBe('')
  // error state
  await waitFor(() =>
    expect(container.textContent).toBe(
      'error: {"graphQLErrors":[],"networkError":{},"message":"Network error: <Mock Error>"}'
    )
  )
  // test final state
})
