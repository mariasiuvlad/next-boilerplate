import {useCreateTournamentMutation, CreateTournamentMutationVariables} from '__generated__/graphql'
import {useCallback} from 'react'
import CreateTournament from './CreateTournament'
import {useForm} from 'react-hook-form'
import useInput from '../components/useInput'
import * as Config from './config'

export default function CreateTournamentContainer() {
  const [createTournament] = useCreateTournamentMutation()

  const form = useForm<CreateTournamentMutationVariables>()
  const {handleSubmit, reset, setError} = form
  const textInput = useInput(form)

  const onSubmit = useCallback(async (variables: CreateTournamentMutationVariables) => {
    createTournament({variables}).then(
      () => reset(),
      ({message}) => setError('api', {type: 'manual', message})
    )
  }, [])

  return (
    <CreateTournament
      inputs={Object.values(Config).map(textInput)}
      form={form}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
