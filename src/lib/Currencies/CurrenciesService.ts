import LocalStorageService from '../LocalStorageService'
import CurrenciesClient from './CurrenciesClient'
import { CurrenciesData } from './types'

const initData: CurrenciesData = {
  base: '',
  date: '',
  rates: {},
}

class CurrenciesService extends LocalStorageService {
  client: CurrenciesClient

  constructor(client: CurrenciesClient) {
    super('fxacurrs', initData)

    this.client = client
  }

  getCurrencies = async () => {
    const { base, date, rates } = this.getData()

    if ([base, date, Object.keys(rates).length > 0].some((v) => !v)) {
      try {
        const data = await this.client.getLatest()
        this.setData(data)

        return data
      } catch (err) {
        const error = err as Error
        throw new Error(error.message)
      }
    }

    return { base, date, rates }
  }
}

export default CurrenciesService
