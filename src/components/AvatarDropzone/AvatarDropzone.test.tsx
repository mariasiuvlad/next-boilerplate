import React from 'react'
import {mount} from 'enzyme'
import AvatarDropzone from './AvatarDropzone'
import {MockedProvider} from '@apollo/react-testing'
import {GetUserMock} from '__mocks__'

test('it renders', () => {
  const wrapper = mount(
    <MockedProvider mocks={[GetUserMock]}>
      <AvatarDropzone>AvatarDropzone</AvatarDropzone>
    </MockedProvider>
  )
  expect(wrapper.text()).toMatch('AvatarDropzone')
})
