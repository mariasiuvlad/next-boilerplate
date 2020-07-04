import initialState from '../initialState'
import {mockAuthActions, LoginResponseMock} from '__mocks__'
import {refreshTokenBeforeExpiry} from '../effects'
import {render} from '@testing-library/react'
import {useEffect} from 'react'

jest.useFakeTimers()

const MockComponent = ({state}) => {
  useEffect(...refreshTokenBeforeExpiry(state, mockAuthActions))

  return <div>{state.isLoggedIn}</div>
}

beforeEach(() => {
  jest.clearAllTimers()
})

test('refresh token', async () => {
  const {rerender} = render(
    <MockComponent state={initialState(LoginResponseMock, true)} />
  )
  expect(setTimeout).toBeCalledWith(mockAuthActions.refresh, 900000 - 30 * 1000)

  rerender(<MockComponent state={initialState(null, true)} />)
  expect(clearTimeout).toBeCalled()
})
