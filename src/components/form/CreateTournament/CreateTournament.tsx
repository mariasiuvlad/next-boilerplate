import Button from '@components/atoms/Button'
import {ErrorMessage} from '@hookform/error-message'
import {CreateTournamentMutationVariables} from '__generated__/graphql'
import {UseFormMethods} from 'react-hook-form'
import {UseInput} from '../types'
import FormError from '@components/atoms/FormError'

interface CreateTournamentProps {
  inputs: UseInput[]
  onSubmit(): void
  form: UseFormMethods<CreateTournamentMutationVariables>
}

export default function CreateTournament({
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}: CreateTournamentProps) {
  return (
    <form onSubmit={onSubmit}>
      <section className="mb-4 mt-16">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>
      <section className="mb-8">
        <h1 className="text-yellow-500 text-2xl text-center">Create Tournament</h1>
        {inputs.map((input) => (
          <div className="my-4" key={input.name}>
            {input.Control}
          </div>
        ))}
      </section>
      <Button disabled={isSubmitting} variant="primary" label="Create Tournament" />
    </form>
  )
}
