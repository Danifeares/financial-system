const express = require('express')
const {
  registerUser
} = require('./controllers/users')

const routers = express()

routers.post('/usuario', registerUser)

module.exports = routers
