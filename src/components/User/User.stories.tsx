import React from 'react'
import User from './User'
import {MockedProvider} from '@apollo/react-testing'
import {Users} from '__generated__/graphql'

const mockUser = {
  id: '6f8a29ef-b77d-468f-b0b3-51bd06dbb500',
  display_name: 'mariasiuvlad@gmail.com',
  avatar_url:
    'http://localhost:3000/storage/o/user/6f8a29ef-b77d-468f-b0b3-51bd06dbb500/avatar',
  updated_at: '2020-06-24T13:15:50.444491+00:00',
  created_at: '2020-06-24T12:13:37.887102+00:00',
  __typename: 'users',
} as Users

export default {
  component: User,
  title: 'User Example',
}

export const Basic = () => (
  <MockedProvider mocks={[]}>
    <User user={mockUser} />
  </MockedProvider>
)
