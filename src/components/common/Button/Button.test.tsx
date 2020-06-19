import React from 'react'
import {mount} from 'enzyme'
import Button from '@components/common/Button'

test('fires callback', () => {
  const onClick = jest.fn()
  const wrapper = mount(<Button onClick={onClick}>Test Button</Button>)
  wrapper.find('button').simulate('click')
  expect(onClick).toHaveBeenCalled()
})
