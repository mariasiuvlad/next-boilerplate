import gql from 'graphql-tag'

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($avatar_url: String = "") {
    update_users(_set: {avatar_url: $avatar_url}, where: {}) {
      affected_rows
    }
  }
`

export const UPDATE_DISPLAY_NAME = gql`
  mutation UpdateDisplayName($display_name: String = "") {
    update_users(_set: {display_name: $display_name}, where: {}) {
      affected_rows
    }
  }
`
