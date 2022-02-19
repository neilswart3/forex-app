import { all, call, put, takeLatest } from 'redux-saga/effects'
import { config, CurrenciesClient, CurrenciesService } from 'src/lib/Currencies'
import { CurrenciesData } from 'src/lib/Currencies/types'
import { actions } from './reducers'
import { currenciesTypes } from './types'

function* handleCurrencies() {
  try {
    const client = new CurrenciesClient(config)
    const service = new CurrenciesService(client)

    const data: CurrenciesData = yield call([service, 'getCurrencies'])

    yield put(actions.currenciesSuccess({ data }))
  } catch (err) {
    const error = err as Error

    yield put(actions.currenciesFailed({ error: error.message }))
  }
}

export default function* currenciesWatcher() {
  yield all([takeLatest(currenciesTypes.CURRENCIES_REQUEST, handleCurrencies)])
}
