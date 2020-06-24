import React from 'react'
import {mount} from 'enzyme'
import AvatarDropzone from './AvatarDropzone'
import {MockedProvider} from '@apollo/react-testing'
import {GetUserDocument} from '__generated__/graphql'

// @TODO move somewhere else
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
          users: [
            {
              id: '6f8a29ef-b77d-468f-b0b3-51bd06dbb500',
              display_name: 'mariasiuvlad@gmail.com',
              avatar_url:
                'http://localhost:3000/storage/o/user/6f8a29ef-b77d-468f-b0b3-51bd06dbb500/avatar',
              updated_at: '2020-06-24T13:15:50.444491+00:00',
              created_at: '2020-06-24T12:13:37.887102+00:00',
              __typename: 'users',
            },
          ],
        },
      }
    },
  },
]

test('it renders', () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <AvatarDropzone>AvatarDropzone</AvatarDropzone>
    </MockedProvider>
  )
  expect(wrapper.text()).toMatch('AvatarDropzone')
})
