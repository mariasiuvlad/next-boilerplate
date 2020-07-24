import {
  TournamentInfoFragment,
  useGetUserQuery,
  useJoinTournamentMutation,
  useLeaveTournamentMutation,
  GetTournamentsDocument,
} from '__generated__/graphql'
import Loading from '@atom/Loading'
import {useCallback} from 'react'
import Button from '@atom/Button'
import Link from 'next/link'

interface TournamentProps {
  tournament: TournamentInfoFragment
}

export const TournamentCard = ({tournament}: TournamentProps) => {
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
      <div>
        <Button
          disabled={joinLoading || leaveLoading}
          icon={!isJoined && 'coin'}
          variant={isJoined ? 'default' : 'sharp'}
          label={isJoined ? 'Leave' : tournament.entry_fee}
          onClick={isJoined ? handleLeave : handleJoin}
        />
        <Link href={`/tournament/${tournament.id}`}>
          <a>Go</a>
        </Link>
      </div>
    </div>
  )
}
