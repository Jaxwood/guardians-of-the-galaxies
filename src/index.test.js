var expect = require('expect')
var names = require('./guardians-of-the-galaxies.json')
var sut = require('./index')

describe('guardians of the galaxies', function() {
  it('should return all names', function() {
    var actual = sut.all
    expect(actual).toEqual(names)
  })

  it('should return random name', function() {
    var actual = sut.random
    expect(names).toInclude(actual)
  })
})
