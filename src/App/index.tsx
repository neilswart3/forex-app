import { useEffect } from 'react'
import AccountsService from 'src/lib/Accounts/AccountsService'
import { actions } from 'src/store/currencies'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'

function App() {
  const { data } = useAppSelector(({ currencies }) => currencies)
  const dispatch = useAppDispatch()

  const service = new AccountsService()

  useEffect(() => {
    const { rates } = data

    if (Object.keys(rates).length === 0) {
      dispatch(actions.currenciesRequest())
    }
  }, [data, dispatch])

  const handleAccounts = (actions: 'credit' | 'debit') => {
    if (actions === 'credit') {
      service.creditAccount('EUR', 1)
    }

    if (actions === 'debit') {
      service.debitAccount('EUR', 1)
    }
  }

  const handleTransfer = () => {
    service.transferFunds({ from: 'GBP', to: 'EUR', amount: 10 })
  }

  return (
    <div className='App'>
      <button onClick={() => handleAccounts('credit')}>credit</button>
      <button onClick={() => handleAccounts('debit')}>debit</button>
      <button onClick={handleTransfer}>Transfer EUR to GBP</button>
    </div>
  )
}

export default App
