const jwt = require('jsonwebtoken')
const pool = require('../connection')
const senhaJwt = require('../jwtPassword')

const authentication = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({message: 'Não autorizado!'})
    }

    const token = authorization.split(' ')[1]

    try{
        const { id } = jwt.verify(token, senhaJwt)

		const { rows, rowCount } = await pool.query('SELECT * from usuarios WHERE id = $1', [id])

		if (rowCount == 0) {
			return res.status(401).json({ mensagem: 'Não autorizado' })
		}

		const { senha, ...usuario } = rows[0]

		req.usuario = usuario

		next()

    }
    catch(error) {
        console.log(error.message)
        return res.status(401).json({message: 'Não autorizado!'})
    }
}

module.exports = authentication