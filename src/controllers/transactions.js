const pool = require('../connection')
const { findCategorieID } = require('../utils/categoriesValidations')
const { transactionDataValidation, inputType } = require('../utils/transactionsValidations')

const listTransactions = async (req, res) => {
  try {
    const query = `
    SELECT
    t.id,
    t.tipo,
    t.descricao,
    t.valor,
    t.data,
    t.usuario_id,
    t.categoria_id,
    c.descricao as categoria_nome
    FROM transacoes t JOIN categorias c
    on t.categoria_id = c.id
    WHERE t.usuario_id = $1;
    `
    const id = req.user.id

    const { rows: transactions } = await pool.query(query, [id])

    return res.status(200).json(transactions)

  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

const findTransactionID = async (req, res) => {
  const { id: transactionID } = req.params

  try {

    const query = `
    SELECT
    t.id,
    t.tipo,
    t.descricao,
    t.valor,
    t.data,
    t.usuario_id,
    t.categoria_id,
    c.descricao as categoria_nome
    FROM transacoes t JOIN categorias c
    on t.categoria_id = c.id
    WHERE t.usuario_id = $1
    AND t.id = $2;
    `
    const userID = req.user.id

    const { rows: transaction, rowCount } = await pool.query(query, [userID, transactionID])

    if (rowCount < 1) {
      throw {
        message: 'Transação não encontrada.',
        code: 404
      }
    }

    return res.status(200).json(transaction)
  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

const insertTransaction = async (req, res) => {
  const { descricao, valor, data, categoria_id, tipo } = req.body
  const userID = req.user.id
  try {
    await transactionDataValidation(req.body)
    await findCategorieID(categoria_id)
    await inputType(tipo)

    const queryTransaction = `
    INSERT INTO transacoes 
    (descricao, valor, data, categoria_id, tipo, usuario_id) 
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `
    const params = [descricao, valor, data, categoria_id, tipo, userID]

    const { rows: transaction } = await pool.query(queryTransaction, params)

    const { rows: categorie } = await pool.query(
      'SELECT descricao as categoria_nome FROM categorias WHERE id = $1;', [categoria_id]
    )

    const response = {
      ...transaction[0],
      ...categorie[0]
    }

    return res.status(201).json(response)
  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

module.exports = {
  listTransactions,
  findTransactionID,
  insertTransaction
}