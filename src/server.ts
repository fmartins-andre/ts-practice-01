import express, { json, urlencoded } from 'express'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', (request, response) => {
  return response.status(200).json({ message: 'olá mundo' })
})

app.get('/message', (request, response) => {
  console.log(request.query)

  response.status(201).send()
})

app.listen(3333)
