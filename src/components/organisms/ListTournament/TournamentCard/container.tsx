import {useCallback} from 'react'
import TournamentCard from './TournamentCard'
import {
  useGetUserQuery,
  useJoinTournamentMutation,
  useLeaveTournamentMutation,
  GetTournamentsDocument,
} from '__generated__/graphql'
import Loading from '@atom/Loading'

const TournamentCardContainer = (props) => {
  const {tournament} = props
  const {data, loading} = useGetUserQuery()
  const handleLeave = useCallback(
    () =>
      leaveTournament({
        variables: {id: tournament.id},
        refetchQueries: [{query: GetTournamentsDocument}],
      }),
    []
  )

  const handleJoin = useCallback(
    () =>
      joinTournament({
        variables: {tournament_id: tournament.id},
        refetchQueries: [{query: GetTournamentsDocument}],
      }),
    []
  )
  const [joinTournament, {loading: joinLoading}] = useJoinTournamentMutation()
  const [leaveTournament, {loading: leaveLoading}] = useLeaveTournamentMutation()

  if (!data) return <Loading />
  const isJoined = tournament.participants.map((p) => p.user_id).includes(data.me[0].id)

  return (
    <TournamentCard
      {...props}
      isJoined={isJoined}
      loading={loading}
      syncing={joinLoading || leaveLoading}
      tournament={tournament}
      onJoin={handleJoin}
      onLeave={handleLeave}
    />
  )
}

export default TournamentCardContainer
