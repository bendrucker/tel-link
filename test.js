'use strict'

var test = require('tape')
var telLink = require('./')

test(function (t) {
  t.equal(telLink('411'), 'tel:411')
  t.throws(telLink)
  t.end()
})
