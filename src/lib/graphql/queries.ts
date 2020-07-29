import gql from 'graphql-tag'

export const GET_USER = gql`
  query GetUser {
    me {
      id
      display_name
      avatar_url
      updated_at
      created_at
    }
  }
`

export const GetTournaments = gql`
  fragment TournamentInfo on tournaments_tournament {
    id
    owner {
      display_name
      avatar_url
    }
    participants {
      user_id
      user {
        display_name
        avatar_url
      }
    }
    entry_fee
    description
    participants_limit
    start_date
    status
    title
    type
  }

  query GetTournaments($limit: Int = 10, $offset: Int = 0) {
    tournaments_tournament(limit: $limit, offset: $offset) {
      ...TournamentInfo
    }
  }

  query GetTournament($id: uuid!) {
    tournaments_tournament_by_pk(id: $id) {
      ...TournamentInfo
    }
  }
`

export const CountTournaments = gql`
  query CountTournaments {
    tournaments_tournament_aggregate {
      aggregate {
        count
      }
    }
  }
`
