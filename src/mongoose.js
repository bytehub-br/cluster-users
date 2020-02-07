const mongoose = require('mongoose')

mongoose.Promise = global.Promise

class Mongoose {
  constructor () {
    this.options = {
      autoIndex: false, // Don't build indexes
      // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      // reconnectInterval: 500, // Reconnect every 500ms
      useFindAndModify: false,
      poolSize: 10, // Maintain up to 10 socket connections
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }

    this.connected = false
  }

  connect () {
    return new Promise(async resolve => {
      mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection open to ' + process.env.MONGODB_URI)
        this.connected = true
        resolve()
      })
      mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ', err)
        this.connected = false
      })
      mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected')
        this.connected = false
      })

      mongoose.connect(process.env.MONGODB_URI, this.options)
        .catch((error) => {
          console.log('Error connecting to MongoDB', error)
        })
    })
  }

  closeConnection () {
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected')
    })
  }
}

module.exports = new Mongoose()
