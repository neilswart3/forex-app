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
    currenciesRequest: helpers.currenciesRequest,
    currenciesFailed: helpers.currenciesFailed,
    currenciesSuccess: helpers.currenciesSuccess,
  },
})

export { actions, reducer }
