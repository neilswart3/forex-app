import { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_CURRENCY_BASE_URL,
}

export default config
