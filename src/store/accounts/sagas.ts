import { all, call, put, takeLatest } from 'redux-saga/effects'
import { AccountsService } from 'src/lib/Accounts'
import { AccountsData } from 'src/lib/Accounts/types'
import { actions } from './reducers'
import { accountsTypes } from './types'

function* handleAccounts() {
  try {
    const service = new AccountsService()
    const data: AccountsData = yield call([service, 'getAccounts'])

    yield put(actions.getAccountsSuccess({ data }))
  } catch (err) {
    const error = err as Error

    yield put(actions.getAccountsFailed({ error: error.message }))
  }
}

export default function* accountsWatcher() {
  yield all([takeLatest(accountsTypes.GET_ACCOUNTS_REQUEST, handleAccounts)])
}
