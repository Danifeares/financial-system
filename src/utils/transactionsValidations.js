const pool = require('../connection')
const { Pool } = require("pg")

const transactionDataValidation = async ({ descricao, valor, data, categoria_id, tipo }) => {
  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    throw {
      message: 'Todos os campos obrigatórios devem ser informados.',
      code: 400
    }
  }
}

const inputType = async (type) => {
  if (type !== 'entrada' && type !== 'saida') {
    throw {
      message: 'O tipo de transação informado é inválido.',
      code: 400
    }
  }
}

const findTransactionIDBelongingToUser = async (id, userID) => {
  const { rows, rowCount } = await pool.query('SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, userID])
  if (rowCount == 0) {
    throw {
      message: 'A transação informada não pertence ao usuário ou não existe.',
      code: 404
    }
  }
  return rows
}

module.exports = {
  transactionDataValidation,
  inputType,
  findTransactionIDBelongingToUser
}