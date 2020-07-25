import CreateTournament from './container'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import {MockedProvider} from '@apollo/react-testing'
import {CreateTournamentDocument} from '__generated__/graphql'

let mutationCalled = false

export const CreateTournamentMock = {
  request: {
    query: CreateTournamentDocument,
    variables: {
      type: 'elimination',
      status: 'in_progress',
      participants_limit: '2',
      title: 'test title',
      start_date: '10/10/2020',
      entry_fee: '100',
    },
  },
  result: () => {
    mutationCalled = true
    return {data: {affected_rows: 1}}
  },
}

const submit = () => fireEvent.submit(screen.getByRole('button'))
const setTitle = (value) =>
  fireEvent.input(screen.getByLabelText('title'), {
    target: {value},
  })

const setStartDate = (value) =>
  fireEvent.input(screen.getByLabelText('start_date'), {
    target: {value},
  })

const setParticipantsLimit = (value) =>
  fireEvent.input(screen.getByLabelText('participants_limit'), {
    target: {value},
  })

const setEntryFee = (value) =>
  fireEvent.input(screen.getByLabelText('entry_fee'), {
    target: {value},
  })

test('it renders', () => {
  const tree = render(
    <MockedProvider mocks={[]}>
      <CreateTournament />
    </MockedProvider>
  )
  expect(tree).toMatchSnapshot()
})

test('it shows errors', async () => {
  const {getAllByRole} = render(
    <MockedProvider mocks={[CreateTournamentMock]}>
      <CreateTournament />
    </MockedProvider>
  )
  submit()
  await waitFor(() => expect(getAllByRole('alert')).not.toHaveLength(0))
})

test('it submits', async () => {
  const {queryAllByRole} = render(
    <MockedProvider mocks={[CreateTournamentMock]}>
      <CreateTournament />
    </MockedProvider>
  )
  setTitle('test title')
  setStartDate('10/10/2020')
  setParticipantsLimit(2)
  setEntryFee(100)
  submit()
  await waitFor(() => expect(queryAllByRole('alert')).toHaveLength(0))
  expect(mutationCalled).toBe(true)
})
