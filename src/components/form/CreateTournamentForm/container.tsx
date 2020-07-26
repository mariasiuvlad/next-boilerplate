import {useCallback} from 'react'
import {
  useCreateTournamentMutation,
  CreateTournamentMutationVariables,
  GetTournamentsDocument,
} from '__generated__/graphql'
import FormContainer from '../components/FormContainer'
import CreateTournamentForm from './CreateTournamentForm'

export default function CreateTournamentContainer() {
  const [createTournament] = useCreateTournamentMutation()

  const onSubmit = useCallback(
    async (variables: CreateTournamentMutationVariables) =>
      createTournament({variables, refetchQueries: [{query: GetTournamentsDocument}]}),
    []
  )

  return <FormContainer render={CreateTournamentForm} callback={onSubmit} />
}
