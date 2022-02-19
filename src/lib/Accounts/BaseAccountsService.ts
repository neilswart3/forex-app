import Account from './Account'
import LocalStorageService from '../LocalStorageService'

class BaseAccountsService extends LocalStorageService {
  amountError = (amount: number): Error | void => {
    if (amount <= 0)
      throw new Error('The amount has to be a positive number greater than 0.')
  }

  accountError = (code: string, account: Account | undefined): Error | void => {
    console.log('account:', account)

    if (!account) throw new Error(`${code} is not a valid account.`)
  }

  valueError = (value: number): Error | void => {
    if (value < 0)
      throw new Error('You have insufficient funds to complete this transfer.')
  }
}

export default BaseAccountsService
