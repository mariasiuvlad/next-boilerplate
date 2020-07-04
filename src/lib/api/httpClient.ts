import axios from 'axios'
import {HBP_API} from '@config'

const HttpClient = axios.create({
  baseURL: HBP_API,
  timeout: 10000,
  withCredentials: true,
})

// Add a request interceptor
HttpClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// Add a response interceptor
HttpClient.interceptors.response.use(
  (response) => response,
  ({request, response}) =>
    response
      ? Promise.reject({context: response, message: response.data?.message})
      : Promise.reject({
          message: 'The request was made but no response was received',
          context: {request},
        })
)

export default HttpClient
