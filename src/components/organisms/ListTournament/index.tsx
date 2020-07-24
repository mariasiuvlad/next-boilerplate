import {useCountTournamentsQuery, useGetTournamentsQuery} from '__generated__/graphql'
import ListTournament from './ListTournament'

export default function ListTournamentContainer() {
  const {data, loading} = useGetTournamentsQuery({pollInterval: 5000})
  const {data: countData, loading: countLoading} = useCountTournamentsQuery()
  return (
    <ListTournament
      data={data?.tournaments_tournament}
      count={countData?.tournaments_tournament_aggregate.aggregate.count}
      loading={loading || countLoading}
    />
  )
}
