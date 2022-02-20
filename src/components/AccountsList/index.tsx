import { useEffect, useState } from 'react'
import { AccountCard } from 'src/common'
import { Account } from 'src/lib'
import { useAppSelector } from 'src/store/hooks'
import * as Styled from './styles'

const AccountsList: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const { data } = useAppSelector(({ accounts }) => accounts)

  useEffect(() => {
    const accountsArr = Object.values(data)
    setAccounts(accountsArr)
  }, [data])

  return (
    <Styled.AccountsList>
      {accounts.length > 0 &&
        accounts.map((account) => (
          <AccountCard key={account.id} data={account} />
        ))}
    </Styled.AccountsList>
  )
}

export default AccountsList
