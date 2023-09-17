const express = require('express')
const {
  registerUser, loginUser
} = require('./controllers/users')
const authentication = require('./middlers/authentication')

const routers = express()

routers.post('/usuario', registerUser)
routers.post('/login', loginUser)

routers.use(authentication)

module.exports = routers
