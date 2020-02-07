require('dotenv').config({ path: './.env.dev' })
const mongoose = require('mongoose')
const Users = require('./seeds/users.seeder')
const mongoURL = process.env.MONGODB_URI

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
  Users
}
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase()

module.exports = { seedersList, connect, dropdb }
