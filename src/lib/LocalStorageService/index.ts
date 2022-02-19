class LocalStorageService {
  initData: any
  label: string

  constructor(label: string, initData: any) {
    this.initData = initData
    this.label = label

    this.initStorage()
  }

  initStorage = (): void => {
    const data = window.localStorage.getItem(this.label)

    if (!data)
      window.localStorage.setItem(this.label, JSON.stringify(this.initData))
  }

  getData = (): any => {
    this.initStorage()

    const data = window.localStorage.getItem(this.label)

    return JSON.parse(data!)
  }

  setData = (data: any): void => {
    if (!data) throw new Error('Please provide a valid argument')

    this.initStorage()

    window.localStorage.setItem(this.label, JSON.stringify(data))
  }
}

export default LocalStorageService
