import {useCountTournamentsQuery, useGetTournamentsQuery} from '__generated__/graphql'
import ListTournament from './ListTournament'

export default function ListTournamentContainer() {
  const {data, loading, error} = useGetTournamentsQuery({pollInterval: 60000})
  const {data: count} = useCountTournamentsQuery({pollInterval: 60000})

  if (error) return <div>{JSON.stringify(error)}</div>

  return (
    <ListTournament
      data={data?.tournaments_tournament}
      count={count?.tournaments_tournament_aggregate.aggregate.count}
      loading={loading}
    />
  )
}
