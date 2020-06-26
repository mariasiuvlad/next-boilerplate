import gql from 'graphql-tag'

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($avatar_url: String = "") {
    update_users(_set: {avatar_url: $avatar_url}, where: {}) {
      affected_rows
    }
  }
`
