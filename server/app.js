const express = require('express')
require('./db/connection')
const auth = require('./routes/auth')
const todo = require('./routes/todo')

const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello')
})

app.use('/api/v1', auth)
app.use('/api/v2', todo)
app.get('/', (req, res) => {
  app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})
app.listen(1000, () => {
  console.log('server started')
})
