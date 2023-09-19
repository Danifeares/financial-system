const pool = require('../connection')
const { findCategorieID } = require('../utils/categoriesValidations')
const { transactionDataValidation, inputType, findTransactionIDBelongingToUser } = require('../utils/transactionsValidations')

const listTransactions = async (req, res) => {
  try {
    let query = `
      SELECT
        t.id,
        t.tipo,
        t.descricao,
        t.valor,
        t.data,
        t.usuario_id,
        t.categoria_id,
        c.descricao as categoria_nome
      FROM transacoes t
      JOIN categorias c ON t.categoria_id = c.id
      WHERE t.usuario_id = $1
    `

    const id = req.user.id
    const filter = req.query.filtro

    if (Array.isArray(filter) && filter.length > 0) {
      const categories = filter.map((_, i) => `LOWER($${i + 2})`).join(',')
      query += ` AND LOWER(c.descricao) IN (${categories})`
    }

    const { rows: transactions } = await pool.query(query, [id, ...filter || []])

    return res.status(200).json(transactions)
  } catch (error) {
    console.error('Error:', error.message)
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

const transactionUpdate = async (req, res) => {
  const { id } = req.params
  const { descricao, valor, data, categoria_id, tipo } = req.body
  const userID = req.user.id

  try {
    await findTransactionIDBelongingToUser(id, userID)
    await transactionDataValidation(req.body)
    await findCategorieID(categoria_id)
    await inputType(tipo)
    
    const queryUpdate = 
    'UPDATE transacoes SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 WHERE id = $6;'
    const params = [descricao, valor, data, categoria_id, tipo, id]
    await pool.query(queryUpdate, params)
    
    return res.status(204).json()
  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

const transactionDelete = async (req, res) => {
  const { id } = req.params
  const userID = req.user.id

  try {
    await findTransactionIDBelongingToUser(id, userID)
    
    const queryDelete = 'DELETE FROM transacoes WHERE id = $1 AND usuario_id = $2'
    const params = [id, userID]
    await pool.query(queryDelete, params)
    
    return res.status(204).json()
  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

const printStatement = async (req, res) => {
  const userID = req.user.id
  try {
    const query = 'SELECT SUM (valor) AS saldo FROM transacoes WHERE usuario_id = $1 AND tipo = $2'

    const input = await pool.query(query, [userID, 'entrada'])
    const output = await pool.query(query, [userID, 'saida'])
    
    const statement = {entrada: input.rows[0].saldo ?? 0, saida: output.rows[0].saldo ?? 0}
    return res.status(200).json(statement)

  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

module.exports = {
  listTransactions,
  findTransactionID,
  insertTransaction,
  transactionUpdate,
  transactionDelete,
  printStatement
}