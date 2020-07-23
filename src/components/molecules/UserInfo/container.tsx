import Loading from '@components/atoms/Loading'
import Error from '@components/atoms/ErrorMessage'
import User from './User'
import {useGetUserQuery} from '__generated__/graphql'

const UserContainer = () => {
  const {data, loading, error} = useGetUserQuery()
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return <User user={data?.me[0]} />
}

export default UserContainer
