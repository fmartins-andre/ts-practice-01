/* eslint-disable */

export = {}

type StringOrNumber = string | number
type StockType = number

type Shirt = {
  name: string
  numberInStock: number
}

let myNewShirts: Shirt = {
  name: 'Cool Red Shirt',
  numberInStock: 100,
}

let numberOfShirtsInStock: StockType = 500
let numberOfJacketsInStock: StockType = 250

let unionCityPopulation: StringOrNumber = 9_000_000
unionCityPopulation = '1 billion'
