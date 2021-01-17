const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
  return res.send('This is changed immediately!')
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

module.exports = app
