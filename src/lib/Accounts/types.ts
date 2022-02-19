import Account from './Account'

export interface AccountPayload {
  code: string
  name: string
  value?: number
}

export interface AccountTransferPayload {
  from: string
  to: string
  amount: number
}

export interface AccountsData {
  [key: string]: Account
}
