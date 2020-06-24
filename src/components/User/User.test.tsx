import React from 'react'
import {mount} from 'enzyme'
import User from './User'

import {MockedProvider} from '@apollo/react-testing'

const mockUser = {
  display_name: 'testuser@gmail.com',
  avatar_url:
    'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
}

test('shows display name', () => {
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <User user={mockUser} />
    </MockedProvider>
  )
  expect(wrapper.find('p').text()).toBe(mockUser.display_name)
})
