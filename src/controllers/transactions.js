const pool = require('../connection')

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
  const { id } = req.params
  
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

    const { rows: transaction, rowCount } = await pool.query(query, [userID, id])
    
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


module.exports = {
  listTransactions,
  findTransactionID
}