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

export const CREATE_TOURNAMENT = gql`
  mutation CreateTournament(
    $type: tournaments_tournament_type_enum_enum = elimination
    $title: String
    $status: tournaments_tournament_status_enum_enum = in_progress
    $start_date: date
    $participants_limit: Int = 10
    $entry_fee: float8
    $description: String
  ) {
    insert_tournaments_tournament_one(
      object: {
        description: $description
        entry_fee: $entry_fee
        participants_limit: $participants_limit
        start_date: $start_date
        status: $status
        title: $title
        type: $type
      }
    ) {
      id
    }
  }
`

export const JoinTournament = gql`
  mutation JoinTournament($tournament_id: uuid) {
    insert_tournaments_tournament_participants_one(object: {tournament_id: $tournament_id}) {
      user_id
      tournament_id
    }
  }
`

export const LeaveTournament = gql`
  mutation LeaveTournament(
    $tournament_id: uuid_comparison_exp = {}
    $user_id: uuid_comparison_exp = {}
  ) {
    delete_tournaments_tournament_participants(
      where: {_and: {tournament_id: $tournament_id, user_id: $user_id}}
    ) {
      affected_rows
    }
  }
`
