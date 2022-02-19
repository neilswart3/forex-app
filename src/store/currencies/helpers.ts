import { CurrenciesFailed, CurrenciesState, CurrenciesSuccess } from './types'

export const currenciesRequest = (state: CurrenciesState): CurrenciesState => ({
  ...state,
  isLoading: true,
})

export const currenciesFailed = (
  state: CurrenciesState,
  { payload }: CurrenciesFailed
): CurrenciesState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const currenciesSuccess = (
  state: CurrenciesState,
  { payload }: CurrenciesSuccess
): CurrenciesState => ({
  ...state,
  isLoading: false,
  data: payload.data,
})
