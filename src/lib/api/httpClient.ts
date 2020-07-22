import axios from 'axios'
import {HBP_API} from '@config'
import {logger} from '@lib/log'

const HttpClient = axios.create({
  baseURL: HBP_API,
  timeout: 10000,
  withCredentials: true,
})

const log = logger.extend('auth:api')

// Add a request interceptor
HttpClient.interceptors.request.use(
  (config) => {
    log('%s %s%s', config.method.toUpperCase(), config.baseURL, config.url)
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor
HttpClient.interceptors.response.use(
  (response) => {
    log('%s %s', response.status, response.statusText)
    return response
  },
  ({request, response}) => {
    if (!response) {
      log('request failed')
      return Promise.reject({
        message: 'The request was made but no response was received',
        context: {request},
      })
    }
    log('%s %s | %s', response?.status, response?.statusText, response?.data?.message)
    return Promise.reject({context: response, message: response.data?.message})
  }
)

export default HttpClient
