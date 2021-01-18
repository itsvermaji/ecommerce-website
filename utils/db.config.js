const mongoose = require('mongoose')

const mongoport = 3000

mongoose.connect(`mongodb://localhost:${mongoport}/hbakers`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log(`Mongodb is connected and running on ${mongoport}`)
})
