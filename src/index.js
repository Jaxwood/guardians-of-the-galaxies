'use strict'

var uniqueRandomArray = require('unique-random')
var starWarsNames = require('./starwars-names.json')

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}
