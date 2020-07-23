import React from 'react'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'
import User from '.'

import {MockedProvider} from '@apollo/react-testing'
import {GetUserMock, GetUserMockError} from '__mocks__'

const wait = (amount = 0) => new Promise((resolve) => setTimeout(resolve, amount))

test("it loads and renders the user's display name", async () => {
  const wrapper = mount(
    <MockedProvider mocks={[GetUserMock]}>
      <User />
    </MockedProvider>
  )
  // test loading state
  expect(wrapper.text()).toBe('loading...')

  await act(async () => {
    await wait(0)
    wrapper.update()
  })

  // test final state
  expect(wrapper.find('p').text()).toBe('mariasiuvlad@gmail.com')
})

test('it handles errors', async () => {
  const wrapper = mount(
    <MockedProvider mocks={[GetUserMockError]}>
      <User />
    </MockedProvider>
  )
  // test loading state
  expect(wrapper.text()).toBe('loading...')

  await act(async () => {
    await wait(0)
    wrapper.update()
  })

  // test final state
  expect(wrapper.find('pre').text()).toBe(
    '{"graphQLErrors":[],"networkError":{},"message":"Network error: <Mock Error>"}'
  )
})
