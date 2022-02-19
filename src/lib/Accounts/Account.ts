import { v4 as uuid } from 'uuid'
import { AccountPayload } from './types'

class Account {
  id: string
  code: string
  name: string
  value: number | any

  constructor({ code, name, value = 0 }: AccountPayload) {
    this.id = uuid()
    this.code = code
    this.name = name
    this.value = value
  }
}

export default Account
