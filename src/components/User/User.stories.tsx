import React from 'react'
import User from './User'

export default {
  component: User,
  title: 'User Example',
}

export const Basic = () => (
  <User
    user={{
      display_name: 'Mariasiu Vlad',
      avatar_url:
        'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
    }}
  />
)
