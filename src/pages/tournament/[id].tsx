import {useRouter} from 'next/router'
import {TournamentInfoFragment, GetTournamentDocument} from '__generated__/graphql'
import {initializeApollo} from '@lib/graphql/apolloClient'
import Loading from '@atom/Loading'
import Layout from '@organism/Layout'

function TournamentPage({tournament}: {tournament: TournamentInfoFragment}) {
  const {isFallback} = useRouter()
  if (isFallback) {
    return <Loading />
  }
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
        <div className="mt-8">
          <h1 className="text-2xl mb-4 text-yellow-500">Participants</h1>
          {tournament.participants.map(({user_id, user}) => (
            <div key={user_id} className="flex flex-row items-center my-4">
              <img className="w-16 h-16 rounded-full mr-8" src={user.avatar_url} />
              <p>{user.display_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({params: {id}}) {
  const apolloClient = initializeApollo({})
  const {data} = await apolloClient.query({
    query: GetTournamentDocument,
    variables: {id},
  })
  return {
    props: {tournament: data.tournaments_tournament_by_pk}, // will be passed to the page component as props
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

TournamentPage.getLayout = Layout

export default TournamentPage
