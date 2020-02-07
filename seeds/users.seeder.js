const { Seeder } = require('mongoose-data-seed')
const User = require('../src/models/User')
const data = JSON.parse(require('fs').readFileSync(require('path').join(__dirname, './users.seeds.json')).toString())

class UsersSeeder extends Seeder {
  async shouldRun () {
    return User.countDocuments().exec().then(count => count === 0)
  }

  async run () {
    return User.create(data)
  }
}

module.exports = UsersSeeder
