const crypto = require('crypto')

module.exports = function generateUniqueId () {
  return crypto.randomBytes(14).toString('hex')
}
