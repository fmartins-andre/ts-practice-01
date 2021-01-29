/* eslint-disable */

interface FruitInformation {
  name: string
  color: 'orange' | 'green' | 'red'
}

interface FruitInformationWithPips extends FruitInformation {
  pipCount: number
}

interface FruitInformationWithSeeds extends FruitInformation {
  seedCount: number
}

const appleInformation: FruitInformationWithPips = {
  name: 'Apple',
  color: 'red',
  pipCount: 10,
}

const orangeInformation: FruitInformationWithSeeds = {
  name: 'Orange',
  color: 'orange',
  seedCount: 20,
}

const pearInformation: FruitInformationWithPips = {
  name: 'Pear',
  color: 'green',
  pipCount: 15,
}
