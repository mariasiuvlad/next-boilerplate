import {UpdateAvatarDocument, GetUserDocument} from '__generated__/graphql'
import {TLoginResponseData} from '@lib/api/auth/types'
import {AuthActionsContext} from '@context/auth'

export const mockUser = {
  id: '6f8a29ef-b77d-468f-b0b3-51bd06dbb500',
  display_name: 'mariasiuvlad@gmail.com',
  avatar_url:
    'http://localhost:3000/storage/o/user/6f8a29ef-b77d-468f-b0b3-51bd06dbb500/avatar',
  updated_at: '2020-06-24T13:15:50.444491+00:00',
  created_at: '2020-06-24T12:13:37.887102+00:00',
  __typename: 'users',
}

export const LoginResponseMock: TLoginResponseData = {
  jwt_token: '<Mock JWTToken>',
  jwt_expires_in: 900000,
}

export const UpdateAvatarMock = {
  request: {
    query: UpdateAvatarDocument,
    variables: {avatar_url: '<Avatar URL>'},
  },
  result: {
    data: {
      update_users: {affected_rows: 1, __typename: 'users_mutation_response'},
    },
  },
}

export const GetUserMock = {
  request: {
    query: GetUserDocument,
  },
  result: {
    data: {
      users: [mockUser],
    },
  },
}

export const GetUserMockError = {
  request: {
    query: GetUserDocument,
  },
  error: new Error('<Mock Error>'),
}

export const mockAuthActions = {
  logout: jest.fn(),
  login: jest.fn((email, password) => {}),
  register: jest.fn((email, password) => {}),
  refresh: jest.fn(),
}

export const withAuthProvider = (WrappedComponent) => (props) => {
  return (
    <AuthActionsContext.Provider value={mockAuthActions}>
      <WrappedComponent {...props} />
    </AuthActionsContext.Provider>
  )
}
