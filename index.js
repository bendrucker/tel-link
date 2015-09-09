'use strict'

var assert = require('assert-ok')

module.exports = function telLink (phone) {
  assert(phone && typeof phone === 'string', 'phone number required')
  return 'tel:' + phone
}
