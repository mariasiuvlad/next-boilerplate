import React from 'react'
import {mockAuthActions} from '__mocks__'
import {AuthActionsContext, AuthProvider} from '@context/auth'
import {render, screen} from '@testing-library/react'
import {useAuth} from '@lib/hooks'

const AuthConsumer = () => {
  const state = useAuth()
  return (
    <div>
      <p data-testid="loading">{state.loading ? 'loading' : 'loaded'}</p>
    </div>
  )
}

const Mocked = () => (
  <AuthActionsContext.Provider value={mockAuthActions}>
    <AuthProvider>
      <AuthConsumer />
    </AuthProvider>
  </AuthActionsContext.Provider>
)

test('renders correctly', async () => {
  render(<Mocked />)
  expect(screen.getByTestId('loading').textContent).toBe('loaded')
})
