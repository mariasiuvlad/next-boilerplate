import React from 'react'
import User from './User'
import {MockedProvider} from '@apollo/react-testing'

export default {
  component: User,
  title: 'User Example',
}

export const Basic = () => (
  <MockedProvider mocks={[]}>
    <User
      user={{
        display_name: 'Mariasiu Vlad',
        avatar_url:
          'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
      }}
    />
  </MockedProvider>
)
