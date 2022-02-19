import { all, fork } from 'redux-saga/effects'
import currenciesSaga from './currencies/sagas'

function* rootSaga() {
  yield all([fork(currenciesSaga)])
}

export default rootSaga
