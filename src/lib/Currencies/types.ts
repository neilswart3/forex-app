export interface CurrenciesData {
  base: string
  date: string
  rates: {
    [key: string]: number
  }
}
