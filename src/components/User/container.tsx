import {useQuery} from '@apollo/react-hooks'
import {GET_USER} from '@lib/graphql/queries'
import Loading from '@components/common/Loading'
import Error from '@components/common/Error'
import User from './User'

const UserContainer = () => {
  const {data, loading, error} = useQuery(GET_USER)
  const user = data?.users[0]
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return <User user={user} />
}

export default UserContainer
