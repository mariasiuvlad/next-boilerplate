import Loading from '@components/common/Loading'
import ErrorMessage from '@components/common/ErrorMessage'
import Button from '@components/common/Button'
import {useCallback} from 'react'
import {
  useGetUserQuery,
  useJoinTournamentMutation,
  useLeaveTournamentMutation,
  GetTournamentsDocument,
  useCountTournamentsQuery,
  TournamentInfoFragment,
  useGetTournamentsQuery,
} from '__generated__/graphql'

interface TournamentProps {
  tournament: TournamentInfoFragment
}

const Tournament = ({tournament}: TournamentProps) => {
  const {
    data: {
      me: [{id}],
    },
    loading,
  } = useGetUserQuery()
  if (loading) return <Loading />
  const [joinTournament, {loading: joinLoading}] = useJoinTournamentMutation()
  const [leaveTournament, {loading: leaveLoading}] = useLeaveTournamentMutation()
  const handleJoin = useCallback(
    () =>
      joinTournament({
        variables: {tournament_id: tournament.id},
        refetchQueries: [{query: GetTournamentsDocument}],
      }),
    []
  )
  const handleLeave = useCallback(
    () =>
      leaveTournament({
        variables: {tournament_id: {_eq: tournament.id}, user_id: {_eq: id}},
        refetchQueries: [{query: GetTournamentsDocument}],
      }),
    []
  )
  const isJoined = tournament.participants.map((p) => p.user_id).includes(id)
  return (
    <div className="text-white my-4 flex flex-row items-end justify-between bg-gray-800 border border-gray-900 p-4 rounded-lg">
      <div>
        <h2 className="text-2xl">{tournament.title}</h2>
        <p className="text-sm text-gray-500 mt-2">
          <span className="text-white">{tournament.type} </span>
          by <span className="text-yellow-500">{tournament.owner.display_name}</span>
        </p>
        <p className="text-sm">
          {tournament.participants.length}/{tournament.participants_limit}
        </p>
      </div>
      <Button
        disabled={joinLoading || leaveLoading}
        icon={!isJoined && 'coin'}
        variant={isJoined ? 'default' : 'sharp'}
        label={isJoined ? 'Leave' : tournament.entry_fee}
        onClick={isJoined ? handleLeave : handleJoin}
      />
    </div>
  )
}

export default function ListTournaments() {
  const {data, loading, error} = useGetTournamentsQuery({pollInterval: 5000})
  const {data: countData, loading: countLoading} = useCountTournamentsQuery()
  if (loading || countLoading) return <Loading />
  if (error) return <ErrorMessage error={error} />
  return (
    <div>
      <h1 className="text-yellow-500 text-2xl my-8 text-center">Tournaments</h1>
      {data.tournaments_tournament.map((t) => (
        <Tournament key={t.id} tournament={t} />
      ))}
      <p className="text-yellow-500 my-4">
        {data.tournaments_tournament.length}/
        {countData.tournaments_tournament_aggregate.aggregate.count}
      </p>
    </div>
  )
}
