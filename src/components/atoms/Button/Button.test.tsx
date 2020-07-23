import React from 'react'
import {mount} from 'enzyme'
import Button from './Button'

test('fires callback', () => {
  const onClick = jest.fn()
  const wrapper = mount(<Button variant="outline" onClick={onClick} label="Test Button" />)
  wrapper.find('button').simulate('click')
  expect(onClick).toHaveBeenCalled()
})
