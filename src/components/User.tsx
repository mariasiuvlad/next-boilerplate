import {useQuery} from '@apollo/react-hooks'
import {GET_USER} from '@lib/graphql/queries'
import Loading from './common/Loading'
import Error from './common/Error'

const UserContainer = () => {
  const {data, loading, error} = useQuery(GET_USER)
  const user = data?.users[0]
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return <User user={user} />
}

const User = ({user}) => (
  <div className="text-sm p-8 bg-white border border-gray-300 rounded-lg">
    <img
      className="w-10 h-10 rounded-full mb-4"
      src={user.avatar_url}
      alt={'Avatar of ' + user.display_name}
    />
    <p className="text-gray-900 leading-none">{user.display_name}</p>
  </div>
)

export default UserContainer
