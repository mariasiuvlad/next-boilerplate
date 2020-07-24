import {TournamentCard} from './TournamentCard'
import Skeleton from '@atom/Skeleton'
import Loading from '@atom/Loading'

const Fallback = () => (
  <div className="mt-8">
    <Skeleton className="mb-8" type="text" />
    <Loading />
  </div>
)

export default function ListTournament({data, count, loading}) {
  if (loading) return <Fallback />
  return (
    <div className="mt-8">
      <h1 className="text-yellow-500 text-2xl mb-8 text-center">Tournaments</h1>
      {data.map((t) => (
        <TournamentCard key={t.id} tournament={t} />
      ))}
      <p className="text-yellow-500 my-4">
        {data.length}/{count}
      </p>
    </div>
  )
}
