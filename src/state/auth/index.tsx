import {createContext, useReducer, Dispatch, useEffect} from 'react'
import {refresh, login, logout} from '@lib/auth'
import authReducer from './reducer'
import {getAuthState} from './utils'
import initialState, {IState} from './initialState'
import {
  TAction,
  RefreshStart,
  RefreshError,
  LoginSuccess,
  LoginStart,
  LoginError,
  Logout,
} from './actions'

interface IContextProps {
  state: IState
  dispatch: Dispatch<TAction>
  actionCreators: any
}

const AuthStore = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
  actionCreators: null,
})

export const AuthProvider = ({jwtToken, children}) => {
  const initialState: IState = getAuthState(jwtToken)
  const [state, dispatch] = useReducer(authReducer, initialState)
  const {isLoggedIn} = state

  const autoLogin = async () => {
    dispatch(RefreshStart())
    try {
      let response = await refresh()
      const payload = response?.data?.jwt_token
      dispatch(LoginSuccess(payload))
    } catch (error) {
      dispatch(RefreshError(error.message))
    }
  }

  const acs = (dispatch) => ({
    login: (email, password) => {
      dispatch(LoginStart())
      login(email, password)
        .then(({data: {jwt_token}}) => dispatch(LoginSuccess(jwt_token)))
        .catch((e) => dispatch(LoginError(e.message)))
    },
    logout: () => {
      logout().then(() => dispatch(Logout()))
    },
  })

  // auto login
  useEffect(() => {
    if (!isLoggedIn) autoLogin()
  }, [])

  const actionCreators = acs(dispatch)

  return (
    <AuthStore.Provider value={{state, dispatch, actionCreators}}>
      {children}
    </AuthStore.Provider>
  )
}

export default AuthStore
