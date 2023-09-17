const jwt = require('jsonwebtoken')
const pool = require('../connection')
const jwtPassword = require('../jwtPassword')

const authentication = async (req, res, next) => {
    const { authorization } = req.headers
    try {

        if (!authorization) {
            throw {
                message: 'Para acessar este recurso um token de autenticação válido deve ser enviado.',
                code: 401
            }
        }

        const token = authorization.split(' ')[1]

        const { id } = jwt.verify(token, jwtPassword)

        const { rows, rowCount } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id])

        if (rowCount == 0) {
            throw {
                message: 'Para acessar este recurso um token de autenticação válido deve ser enviado.',
                code: 401
            }
        }

        delete rows[0].senha

        req.user = rows[0]

        next()
        
    } catch (error) {
        console.log(error.message)
        return res.status(error.code || 500).json({ message: error.message || 'Internal server error' })
      }

}

module.exports = authentication