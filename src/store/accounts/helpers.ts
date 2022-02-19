import {
  AccountsFailedPayload,
  AccountsState,
  AccountsSuccessPayload,
} from './types'

export const getAccountsRequest = (state: AccountsState): AccountsState => ({
  ...state,
  isLoading: true,
})

export const getAccountsFailed = (
  state: AccountsState,
  { payload }: AccountsFailedPayload
): AccountsState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const getAccountsSuccess = (
  state: AccountsState,
  { payload }: AccountsSuccessPayload
): AccountsState => ({
  ...state,
  isLoading: false,
  data: payload.data,
})
