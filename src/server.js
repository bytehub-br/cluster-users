const app = require('./app')
const mongoose = require('./mongoose')

mongoose.connect().then(() => {
  app.listen(process.env.PORT || 3333)
})

process.on('SIGINT', () => {
  mongoose.closeConnection()
  process.exit(1)
})
