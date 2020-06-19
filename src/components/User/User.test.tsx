import React from 'react'
import {mount} from 'enzyme'
import User from './User'

const mockUser = {
  display_name: 'testuser@gmail.com',
  avatar_url:
    'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
}

test('shows display name', () => {
  const wrapper = mount(<User user={mockUser} />)
  expect(wrapper.find('p').text()).toBe(mockUser.display_name)
})
