const express = require('express')
const app = express()

const port = 8080

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index')
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

module.exports = app
