import Account from './Account'
import { AccountsData, AccountTransferPayload } from './types'
import BaseAccountsService from './BaseAccountsService'

const initData: AccountsData = {
  EUR: new Account({ code: 'EUR', name: 'European Euro', value: 1000 }),
  GBP: new Account({ code: 'GBP', name: 'Great Britain Pound' }),
  USD: new Account({ code: 'USD', name: 'United States Dollar' }),
}

class AccountsService extends BaseAccountsService {
  constructor() {
    super('fxaaccs', initData)
  }

  getAccounts = (): AccountsData => {
    return this.getData()
  }

  debitAccount = (code: string, amount: number): void => {
    const data = this.getData()
    const account = data[code] as Account

    this.accountError(code, account)
    this.amountError(amount)

    const value = account.value - amount

    this.valueError(value)

    const newAccount = { ...account, value }
    const newAccountData: AccountsData = {
      ...data,
      [code]: { ...newAccount },
    }

    this.setData(newAccountData)
  }

  creditAccount = (code: string, amount: number): void => {
    const data = this.getData()
    const account = data[code] as Account

    this.accountError(code, account)
    this.amountError(amount)

    const newAccount = { ...account, value: account.value + amount }
    const newAccountData = {
      ...data,
      [code]: { ...newAccount },
    }

    this.setData(newAccountData)
  }

  transferFunds = ({
    from,
    to,
    amount,
  }: AccountTransferPayload): AccountsData => {
    if ([from, to, amount].some((v) => !v))
      throw new Error('Please provide all the data')

    this.debitAccount(from, amount)
    this.creditAccount(to, amount)

    return this.getData()
  }
}

export default AccountsService
