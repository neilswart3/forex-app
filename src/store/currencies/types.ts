import { CurrenciesData } from 'src/lib/Currencies/types'

export interface CurrenciesState {
  data: CurrenciesData
  isLoading: boolean
  error: string | null
}

export interface CurrenciesFailedPayload {
  payload: {
    error: string
  }
}

export interface CurrenciesSuccessPayload {
  payload: {
    data: CurrenciesData
  }
}

export enum currenciesTypes {
  GET_CURRENCIES_REQUEST = 'currencies/getCurrenciesRequest',
  GET_CURRENCIES_FAILED = 'currencies/getCurrenciesFailed',
  GET_CURRENCIES_SUCCESS = 'currencies/getCurrenciesSuccess',
}
