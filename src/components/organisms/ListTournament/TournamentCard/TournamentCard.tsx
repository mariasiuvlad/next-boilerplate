import Link from 'next/link'
import Loading from '@atom/Loading'
import Button from '@atom/Button'
import {TournamentInfoFragment} from '__generated__/graphql'

interface TournamentProps {
  isJoined: boolean
  loading: boolean
  syncing: boolean
  tournament: TournamentInfoFragment
  onJoin(): void
  onLeave(): void
}

export default function TournamentCard({
  isJoined,
  loading,
  tournament,
  syncing,
  onJoin,
  onLeave,
}: TournamentProps) {
  if (loading) return <Loading />
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
          disabled={syncing}
          icon={!isJoined && 'coin'}
          variant={isJoined ? 'default' : 'sharp'}
          label={isJoined ? 'Leave' : tournament.entry_fee}
          onClick={isJoined ? onLeave : onJoin}
        />
        <Link href={`/tournament/${tournament.id}`}>
          <a>Go</a>
        </Link>
      </div>
    </div>
  )
}
