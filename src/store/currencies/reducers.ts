import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { CurrenciesState } from './types'

const initialState: CurrenciesState = {
  data: { base: '', date: '', rates: {} },
  isLoading: false,
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    getCurrenciesRequest: helpers.getCurrenciesRequest,
    getCurrenciesFailed: helpers.getCurrenciesFailed,
    getCurrenciesSuccess: helpers.getCurrenciesSuccess,
  },
})

export { actions, reducer }
