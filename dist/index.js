
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./mui-themes-extand.cjs.production.min.js')
} else {
  module.exports = require('./mui-themes-extand.cjs.development.js')
}
