const { Router } = require('express')
const UserRouter = require('./controllers/user')
const UserValidation = require('./validations/user')
const routes = new Router()

routes.get('/', (req, res) => res.json({ hello: 'worlds' }))
routes.post('/', UserValidation.create, UserRouter.create)
routes.get('/:userId', UserRouter.read)
routes.put('/:userId/update', UserValidation.update, UserRouter.update)
routes.delete('/:userId', UserRouter.delete)

module.exports = routes
