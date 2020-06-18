export type TJWTToken = TLoginResponseData

export type TLoginResponseData = {
  jwt_token: string
  jwt_expires_in: number
}

export type TLoginRequestData = {
  email: string
  password: string
}

export type TRegisterRequestData = TLoginRequestData

export type TRefreshResponse = {
  token: TJWTToken
  headers: any
}
