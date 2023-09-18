const express = require('express')

const {
  registerUser, 
  loginUser,
  findUser,
  userUpdate
} = require('./controllers/users')

const findCategories = require('./controllers/categories')

const { 
  listTransactions, 
  findTransactionID, 
  insertTransaction
} = require('./controllers/transactions')

const authentication = require('./middlers/authentication')

const routers = express()

routers.post('/usuario', registerUser)
routers.post('/login', loginUser)

routers.use(authentication)

routers.get('/usuario', findUser)
routers.put('/usuario', userUpdate)
routers.get('/categoria', findCategories)
routers.get('/transacao', listTransactions)
routers.get('/transacao/:id', findTransactionID)
routers.post('/transacao', insertTransaction)

module.exports = routers
