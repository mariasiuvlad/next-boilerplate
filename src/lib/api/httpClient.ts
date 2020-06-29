import axios from 'axios'
import {HBP_API} from '@config'

export default axios.create({
  baseURL: HBP_API,
  timeout: 10000,
  withCredentials: true,
})
