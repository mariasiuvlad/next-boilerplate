import {AxiosRequestConfig} from 'axios'
import httpClient from '../httpClient'

type ProgressEvent = {
  loaded: number
  total: number
}

type OnUploadProgress = (progressEvent: ProgressEvent) => void

/**
 * @description Upload user avatar image
 */
export const uploadAvatar = (
  file: Blob,
  userId: string,
  onUploadProgress: OnUploadProgress
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
