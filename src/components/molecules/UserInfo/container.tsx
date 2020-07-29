import Error from '@atom/ErrorMessage'
import User from './User'
import {useGetUserQuery} from '__generated__/graphql'

const UserContainer = () => {
  const {data, loading, error} = useGetUserQuery()
  if (error) return <Error error={error} />
  return <User loading={loading} user={data?.me[0]} />
}

export default UserContainer
