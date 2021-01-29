function test(): void {
  let name: string | number = 'Andre'

  name = 3

  console.log(name)

  const fruit: 'banana' | 'watermelon' = 'banana'

  console.log(fruit)
}
test()
