const pool = require('../connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') // to do: login
const jwtPassword = require('../jwtPassword')

const registerUser = async (req, res) => {
  const { nome, email, senha } = req.body
  try {
    if (!nome || !email || !senha) {
      return res.status(403).json({ message: "nome, email e senha são obrigatórios!" })
    }

    const queryEmail = 'SELECT email FROM usuarios WHERE email = $1'
    const { rowCount } = await pool.query(queryEmail, [email])
    if (rowCount >= 1) {
      return res.status(409).json({ message: "Email já existe" })
    }

    const encryptedPassword = await bcrypt.hash(senha, 10)
    
    const queryUser = 
    'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email;'
    const params = [nome, email, encryptedPassword]
    const { rows } = await pool.query(queryUser, params)
    return res.status(201).json(rows[0])

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: 'Internal server error' }) 
  }
}

module.exports = {
  registerUser
}