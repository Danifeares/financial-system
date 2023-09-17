const express = require('express')
const {
  registerUser, loginUser
} = require('./controllers/users')
const authentication = require('./middlers/authentication')
const findCategories = require('./controllers/categories')

const routers = express()

routers.post('/usuario', registerUser)
routers.post('/login', loginUser)

routers.use(authentication)

routers.get('/categoria', findCategories)

module.exports = routers
