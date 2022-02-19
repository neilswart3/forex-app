import { CurrenciesData } from 'src/lib/Currencies/types'

export interface CurrenciesState {
  data: CurrenciesData
  isLoading: boolean
  error: string | null
}

export interface CurrenciesFailed {
  payload: {
    error: string
  }
}

export interface CurrenciesSuccess {
  payload: {
    data: CurrenciesData
  }
}

export enum currenciesTypes {
  CURRENCIES_REQUEST = 'currencies/currenciesRequest',
  CURRENCIES_FAILED = 'currencies/currenciesFailed',
  CURRENCIES_SUCCESS = 'currencies/currenciesSuccess',
}
