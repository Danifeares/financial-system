const pool = require('../connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') // to do: login
const jwtPassword = require('../jwtPassword')
const {
  emailValidator, newUserDataValidation
} = require('../utils/usersValidations')

const registerUser = async (req, res) => {
  const { nome, email, senha } = req.body
  try {
    await newUserDataValidation(req.body)
    await emailValidator(email)

    const encryptedPassword = await bcrypt.hash(senha, 10)

    const queryUser =
      'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email;'
    const params = [nome, email, encryptedPassword]
    const { rows } = await pool.query(queryUser, params)
    return res.status(201).json(rows[0])

  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

module.exports = {
  registerUser
}