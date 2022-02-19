import { combineReducers } from 'redux'
import { accountsReducer } from './accounts'
import { currenciesReducer } from './currencies'

const rootReducer = combineReducers({
  accounts: accountsReducer,
  currencies: currenciesReducer,
})

export default rootReducer
