import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'

export const GET_USERS = gql`
  query GetUser {
    users {
      display_name
    }
  }
`

export const GET_USERS2 = gql`
  query GetUser {
    users {
      display_name
      avatar_url
      updated_at
      created_at
    }
  }
`

const Users = () => {
  const {loading, error, data, fetchMore, networkStatus} = useQuery(GET_USERS)
  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading</div>
  const {users} = data
  return <p>{JSON.stringify(users[0])}</p>
}

export const Users2 = () => {
  const {loading, error, data, fetchMore, networkStatus} = useQuery(GET_USERS2)
  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading</div>
  const {users} = data
  return <p>{JSON.stringify(users[0])}</p>
}

export default Users
