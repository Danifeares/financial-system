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

module.exports = {
  transactionDataValidation,
  inputType
}