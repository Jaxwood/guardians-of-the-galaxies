'use strict'

var starWarsNames = require('./starwars-names.json')
var unique= require('unique-random-array')(starWarsNames)

module.exports = {
  all: starWarsNames,
  random: unique()
}
