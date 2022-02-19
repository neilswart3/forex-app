import Account from '../Account'
import LocalStorageService from '../LocalStorageService'

class AccountService extends LocalStorageService {
  constructor() {
    super('fxaants', {})
  }

  requestAccounts = (): Account[] => {
    return this.getData()
  }

  // createTodo = ({ title, description }: TodoPayload): Todo => {
  //   const todos = this.getData()
  //   const newTodo = new Todo(title, description)
  //   const newTodosData = [...todos, newTodo]

  //   this.setData(newTodosData)

  //   return newTodo
  // }

  // editTodo = (todo: Todo): void => {
  //   const todos = this.getData() as Todo[]
  //   const [selectedTodo] = todos.filter(({ id }) => id === todo.id)

  //   if (!selectedTodo || Object.keys(selectedTodo).length === 0) {
  //     throw new Error('This todo does not exist')
  //   }

  //   const newTodos = todos.map((t) => {
  //     if (t.id === todo.id) return todo
  //     return t
  //   })

  //   this.setData(newTodos)
  // }

  // deleteTodo = (id: string): void => {
  //   const todos = this.getData() as Todo[]
  //   const [selectedTodo] = todos.filter((todo) => id === todo.id)

  //   if (!selectedTodo || Object.keys(selectedTodo).length === 0) {
  //     throw new Error('This todo does not exist')
  //   }

  //   const newTodos = todos.filter((todo) => todo.id !== id)

  //   this.setData(newTodos)
  // }
}

export default AccountService
