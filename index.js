const express = require('express')
require('./utils/db.config')
const app = express()

const port = 8080

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index')
})

app.get('/register', (req, res) => {
  return res.render('register')
})

app.post('/register', (req, res) => {
  return res.send('<h1>Form submitted</h1>')
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

module.exports = app
