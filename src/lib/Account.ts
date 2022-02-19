import { v4 as uuid } from 'uuid'

interface Currencies {
  [key: string]: number
}

class Account {
  id: string
  name: string
  currencies: Currencies

  constructor(name: string) {
    this.id = uuid()
    this.name = name
    this.currencies = {
      usd: 0,
      eur: 0,
      gbp: 0,
    }
  }
}

export default Account
