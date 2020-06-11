export type IState = {
  isLoggedIn: boolean
  jwtToken: string
  loading?: boolean
}

const initialState: IState = {
  isLoggedIn: false,
  jwtToken: '',
  loading: false,
}

export default initialState
