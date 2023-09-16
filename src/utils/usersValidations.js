const pool = require('../connection')

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


module.exports = {
  emailValidator,
  newUserDataValidation
}