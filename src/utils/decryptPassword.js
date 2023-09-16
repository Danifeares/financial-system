const bcrypt = require('bcrypt')

const decryptPassword = (password, encryptedPassword) => {
    
    return bcrypt.compare(password, encryptedPassword)
}

module.exports = decryptPassword