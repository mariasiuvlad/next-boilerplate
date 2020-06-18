import axios, {AxiosRequestConfig} from 'axios'
import {HBP_API} from 'config'

const httpClient = axios.create({
  baseURL: HBP_API,
  withCredentials: true,
  // timeout: 10000,
})

type TProgressEvent = {
  loaded: number
  total: number
}

type TOnUploadProgress = (progressEvent: TProgressEvent) => void

/**
 * @description Upload user avatar image
 */
export const uploadAvatar = (
  file: Blob,
  userId: string,
  onUploadProgress: TOnUploadProgress
) => {
  const URL = `/storage/o/user/${userId}/avatar`
  const payload = new FormData()
  payload.append('file', file)
  const reqConfig: AxiosRequestConfig = {
    headers: {'Content-Type': 'multipart/form-data'},
    onUploadProgress,
    withCredentials: true,
  }

  return httpClient.post(URL, payload, reqConfig)
}
