import React from 'react'
import User from './User'
import {MockedProvider} from '@apollo/react-testing'
import {mockUser} from '__mocks__'

export default {
  component: User,
  title: 'User Example',
}

export const Basic = () => (
  <MockedProvider mocks={[]}>
    <User user={mockUser} />
  </MockedProvider>
)
