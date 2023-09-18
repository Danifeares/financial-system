const pool = require('../connection')

const findTransactions = async (req, res) => {
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

    const { rows } = await pool.query(query, [id])

    return res.status(200).json(rows)

  } catch (error) {
    console.log(error.message)
    return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
  }
}

module.exports = {
  findTransactions
}