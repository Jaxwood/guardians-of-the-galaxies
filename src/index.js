'use strict'

var gotg = require('./guardians-of-the-galaxies.json')
var unique= require('unique-random-array')(gotg)

module.exports = {
  all: gotg,
  random: unique()
}
