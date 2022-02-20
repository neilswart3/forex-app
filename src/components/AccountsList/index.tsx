import { useEffect, useState } from 'react'
import { AccountCard } from 'src/common'
import { Account } from 'src/lib'
import { useAppSelector } from 'src/store/hooks'
import * as Styled from './styles'

const AccountsList: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const { data: accountsData } = useAppSelector(({ accounts }) => accounts)
  const { data: currenciesData } = useAppSelector(
    ({ currencies }) => currencies
  )

  const base = currenciesData.base

  useEffect(() => {
    const accountsArr = Object.values(accountsData)
    setAccounts(accountsArr)
  }, [accountsData, currenciesData])

  return (
    <Styled.AccountsList>
      {accounts.length > 0 &&
        accounts.map((account) => {
          const exchange = currenciesData.rates[account.code] || 0

          return (
            <AccountCard
              key={account.id}
              data={account}
              base={base}
              exchange={exchange}
            />
          )
        })}
    </Styled.AccountsList>
  )
}

export default AccountsList
