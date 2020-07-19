import React from 'react'
import {mount} from 'enzyme'
import Button from './Button'

test('fires callback', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <Button variant="outline" onClick={onClick}>
      Test Button
    </Button>
  )
  wrapper.find('button').simulate('click')
  expect(onClick).toHaveBeenCalled()
})
