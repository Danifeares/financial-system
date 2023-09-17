const pool = require('../connection')

const findCategories = async (req, res) => {
    try {
        const { rows: categories } = await pool.query('SELECT id, descricao FROM categorias')

		return res.json(categories)     
      
    } catch (error) {
      console.log(error.message)
      return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
    }
  }

  module.exports = findCategories