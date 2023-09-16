const express = require('express')
const {
  registerUser, loginUser
} = require('./controllers/users')

const routers = express()

routers.post('/usuario', registerUser)
routers.post('/login', loginUser)

module.exports = routers
