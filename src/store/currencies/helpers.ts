import {
  CurrenciesFailedPayload,
  CurrenciesState,
  CurrenciesSuccessPayload,
} from './types'

export const getCurrenciesRequest = (
  state: CurrenciesState
): CurrenciesState => ({
  ...state,
  isLoading: true,
})

export const getCurrenciesFailed = (
  state: CurrenciesState,
  { payload }: CurrenciesFailedPayload
): CurrenciesState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const getCurrenciesSuccess = (
  state: CurrenciesState,
  { payload }: CurrenciesSuccessPayload
): CurrenciesState => ({
  ...state,
  isLoading: false,
  data: payload.data,
})
