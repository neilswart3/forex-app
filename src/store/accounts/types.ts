import { AccountsData } from 'src/lib/Accounts/types'

export interface AccountsState {
  data: AccountsData
  isLoading: boolean
  error: string | null
}

export interface AccountsFailedPayload {
  payload: {
    error: string
  }
}

export interface AccountsSuccessPayload {
  payload: {
    data: AccountsData
  }
}

export enum accountsTypes {
  GET_ACCOUNTS_REQUEST = 'accounts/getAccountsRequest',
  GET_ACCOUNTS_FAILED = 'accounts/getAccountsFailed',
  GET_ACCOUNTS_SUCCESS = 'accounts/getAccountsSuccess',
}
