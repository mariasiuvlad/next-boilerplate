import React from 'react'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'
import User from '.'

import {MockedProvider} from '@apollo/react-testing'
import {GetUserDocument} from '__generated__/graphql'

// @TODO move somewhere else
const mockUser = {
  id: '6f8a29ef-b77d-468f-b0b3-51bd06dbb500',
  display_name: 'mariasiuvlad@gmail.com',
  avatar_url:
    'http://localhost:3000/storage/o/user/6f8a29ef-b77d-468f-b0b3-51bd06dbb500/avatar',
  updated_at: '2020-06-24T13:15:50.444491+00:00',
  created_at: '2020-06-24T12:13:37.887102+00:00',
  __typename: 'users',
}

const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount))
const mocks = [
  {
    request: {
      query: GetUserDocument,
    },
    result: () => {
      // do something, such as recording that this function has been called
      // ...
      return {
        data: {
          users: [mockUser],
        },
      }
    },
  },
]

test("it loads and renders the user's display name", async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <User />
    </MockedProvider>
  )
  // test loading state
  expect(wrapper.text()).toBe('loading...')

  await act(async () => {
    await wait(0)
    wrapper.update()
  })

  // test final state
  expect(wrapper.find('p').text()).toBe(mockUser.display_name)
})
