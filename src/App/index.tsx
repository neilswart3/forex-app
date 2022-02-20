import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountsService from 'src/lib/Accounts/AccountsService'
import { actions as currenciesActions } from 'src/store/currencies'
import { actions as accountsActions } from 'src/store/accounts'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { Accounts } from 'src/pages'

function App() {
  const dispatch = useAppDispatch()
  const { data: accountsData } = useAppSelector(({ accounts }) => accounts)
  const { data: currenciesData } = useAppSelector(
    ({ currencies }) => currencies
  )

  const service = new AccountsService()

  useEffect(() => {
    const { rates } = currenciesData

    if (Object.keys(accountsData).length === 0) {
      dispatch(accountsActions.getAccountsRequest())
    }

    if (Object.keys(rates).length === 0) {
      dispatch(currenciesActions.getCurrenciesRequest())
    }
  }, [currenciesData, accountsData, dispatch])

  const handleAccounts = (actions: 'credit' | 'debit') => {
    if (actions === 'credit') {
      service.creditAccount('EUR', 1)
    }

    if (actions === 'debit') {
      service.debitAccount('EUR', 1)
    }
  }

  // const handleTransfer = () => {
  //   service.transferFunds({ from: 'GBP', to: 'EUR', amount: 10 })
  // }

  return (
    <Routes>
      <Route path='/' element={<Accounts />} />
    </Routes>
    // <div className='App'>
    //   <button onClick={() => handleAccounts('credit')}>credit</button>
    //   <button onClick={() => handleAccounts('debit')}>debit</button>
    //   <button onClick={handleTransfer}>Transfer EUR to GBP</button>
    // </div>
  )
}

export default App
