import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { AccountsState } from './types'

const initialState: AccountsState = {
  data: {},
  isLoading: false,
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    getAccountsRequest: helpers.getAccountsRequest,
    getAccountsFailed: helpers.getAccountsFailed,
    getAccountsSuccess: helpers.getAccountsSuccess,
  },
})

export { actions, reducer }
