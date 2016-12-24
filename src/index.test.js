var expect = require('expect')
var names = require('./starwars-names.json')
var sut = require('./index')

describe('starwars names', function() {
  it('should return all names', function() {
    var actual = sut.all
    expect(actual).toEqual(names)
  })

  it('should return random name', function() {
    var actual = sut.random
    expect(names).toInclude(actual)
  })
})
