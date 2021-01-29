/* eslint-disable */

let myAnyVariable: any

myAnyVariable = 'oi'
myAnyVariable = 1
myAnyVariable = { greeting: 'hello' }

const property = myAnyVariable.doesNotExist()
myAnyVariable.sayHello()

let myUnknownVariable: unknown

myUnknownVariable = 'hello'
myUnknownVariable = 1
myUnknownVariable = { just: 'inTime' }

// const propertyUnknown = myUnknownVariable.doesNotExist()
// myUnknownVariable.sayHello()
