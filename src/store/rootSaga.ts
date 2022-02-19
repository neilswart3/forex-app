import { all, fork } from 'redux-saga/effects'
import accountsSaga from './accounts/sagas'
import currenciesSaga from './currencies/sagas'

function* rootSaga() {
  yield all([fork(currenciesSaga), fork(accountsSaga)])
}

export default rootSaga
