const pool = require('../connection')
const decryptPassword = require('./decryptPassword')

const newUserDataValidation = async ({ nome, email, senha }) => {
  if (!nome || !email || !senha) {
    throw {
      message: 'nome, email e senha são obrigatórios!',
      code: 400
    }
  }
}

const emailValidator = async (email) => {
  const queryEmail = 'SELECT email FROM usuarios WHERE email = $1'
  const { rowCount } = await pool.query(queryEmail, [email])
  if (rowCount >= 1) {
    throw {
      message: 'Já existe usuário cadastrado com o e-mail informado.',
      code: 409
    }
  }
}

const loginDataValidation = async ({ email, senha }) => {
  if (!email || !senha) {
    throw {
      message: 'E-mail e senha são obrigatórios!',
      code: 400
    }
  }
}

const checkUser = async ({ email, senha }) => {
  const queryUserEmail = 'SELECT * FROM usuarios WHERE email = $1'
  const { rows, rowCount } = await pool.query(queryUserEmail, [email])

  if (rowCount == 0) {
    throw {
      message: 'Usuário e/ou senha inválido(s)',
      code: 404
    }
  }

  const checkPassword = await decryptPassword(senha, rows[0].senha)
  
  if (!checkPassword) {
    throw {
      message: 'Usuário e/ou senha inválido(s)',
      code: 404
    }
  }

  return rows
}



module.exports = {
  emailValidator,
  newUserDataValidation,
  loginDataValidation,
  checkUser
}