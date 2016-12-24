var expect = require('expect')
var sut = require('./index')

describe('starwars names', function() {
  it('should return all names', function() {
    var actual = sut.all()
    expect(actual).toBe(false)
  })

  it('should return random name', function() {
    expect(true).toBe(true)
  })
})
