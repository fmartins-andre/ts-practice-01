/* eslint-disable */

let unionCityPopulation: string | number = 9_000_000
unionCityPopulation = '1 billion'

console.log(
  typeof unionCityPopulation === 'string'
    ? unionCityPopulation
    : unionCityPopulation + 100
)
