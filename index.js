let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)

require('dotenv').config()
let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('*', (req, res) => {
  res.status.(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)