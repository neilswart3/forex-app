import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { CurrenciesData } from './types'

class CurrenciesClient {
  axiosInstance: AxiosInstance
  apiKey: string
  base: string
  latest: string

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config)
    this.apiKey = `api_key=${process.env.REACT_APP_CURRENCY_APP_KEY}`
    this.base = `base=EUR`
    this.latest = '/latest'
  }

  getLatest = async (): Promise<CurrenciesData> => {
    try {
      const res = await this.axiosInstance.get(
        `${this.latest}?${this.apiKey}&${this.base}`
      )

      const data = res.data.response

      return data
    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }
}

export default CurrenciesClient
