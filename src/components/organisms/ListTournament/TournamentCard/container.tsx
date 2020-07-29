import {useCallback} from 'react'
import TournamentCard from './TournamentCard'
import {
  useGetUserQuery,
  useJoinTournamentMutation,
  useLeaveTournamentMutation,
  GetTournamentsDocument,
} from '__generated__/graphql'

const TournamentCardContainer = (props) => {
  const {tournament} = props
  const {
    data: {
      me: [{id: userId}],
    },
    loading,
  } = useGetUserQuery()
  const isJoined = tournament.participants.map((p) => p.user_id).includes(userId)

  const [joinTournament, {loading: joinLoading}] = useJoinTournamentMutation()
  const handleJoin = useCallback(
    () =>
      joinTournament({
        variables: {tournament_id: tournament.id},
        refetchQueries: [{query: GetTournamentsDocument}],
      }),
    []
  )

  const [leaveTournament, {loading: leaveLoading}] = useLeaveTournamentMutation()
  const handleLeave = useCallback(
    () =>
      leaveTournament({
        variables: {id: tournament.id},
        refetchQueries: [{query: GetTournamentsDocument}],
      }),
    []
  )

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
