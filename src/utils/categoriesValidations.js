const pool = require('../connection')

const findCategorieID = async (categorie) => {
  const {rowCount} = await pool.query('SELECT * FROM categorias WHERE id = $1;', [categorie])
  if (rowCount < 1) {
    throw {
      message: 'Categoria não encontrada.',
      code: 404
    }
  }
}

module.exports = {
  findCategorieID
}