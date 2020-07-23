import {useCreateTournamentMutation, CreateTournamentMutationVariables} from '__generated__/graphql'
import {useCallback} from 'react'
import CreateTournament from './CreateTournament'
import {useForm} from 'react-hook-form'
import useInput from '../components/useInput'
import * as Config from './config'

/** @TODO turn into form container template */
export default function CreateTournamentContainer() {
  const form = useForm<CreateTournamentMutationVariables>()
  const {handleSubmit, reset, setError} = form

  const [createTournament] = useCreateTournamentMutation()

  const onSubmit = useCallback(async (variables: CreateTournamentMutationVariables) => {
    createTournament({variables}).then(
      () => reset(),
      ({message}) => setError('api', {type: 'manual', message})
    )
  }, [])

  const textInput = useInput(form)
  return (
    <CreateTournament
      inputs={Object.values(Config).map(textInput)}
      form={form}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
