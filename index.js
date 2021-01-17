const express = require('express')
const app = express()

const port = 3000

app.get('/', function (req, res) {
  return res.send('This is changed immediately!')
})

app.listen(port, function () {
  console.log(`Server running at port ${port}`)
})
