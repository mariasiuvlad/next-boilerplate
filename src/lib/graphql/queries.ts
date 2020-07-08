import gql from 'graphql-tag'

export const GET_USER = gql`
  query GetUser {
    users {
      id
      display_name
      avatar_url
      updated_at
      created_at
    }
  }
`
export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($avatar_url: String = "") {
    update_users(_set: {avatar_url: $avatar_url}, where: {}) {
      affected_rows
    }
  }
`

export const GET_USER_SUBSCRIPTION = gql`
  subscription MyUser {
    users {
      id
      display_name
      avatar_url
      updated_at
      created_at
    }
  }
`
