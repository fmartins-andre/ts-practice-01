/* eslint-disable */

enum ElementType {
  Earth = 'brown',
  Wind = 'grey',
  Fire = 'red',
  Water = 'blue',
}

let myFavoriteElementType: ElementType = ElementType.Wind

myFavoriteElementType = ElementType.Water

const isWaterMyFavoriteElementType: boolean =
  myFavoriteElementType === ElementType.Water

const myFavoriteColor = 'blue'

switch (myFavoriteColor) {
  case ElementType.Water:
    console.log('Water matches my favorite color!')
    break
  default:
    console.log('This element type does not match my favorite color!')
    break
}
