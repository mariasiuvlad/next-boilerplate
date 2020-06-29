import Loading from '@components/common/Loading'
import Error from '@components/common/Error'
import User from './User'
import { useGetUserQuery } from '__generated__/graphql'

const UserContainer = () => {
  const {data, loading, error} = useGetUserQuery()
  const user = data?.users[0]
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return <User user={user} />
}

export default UserContainer
