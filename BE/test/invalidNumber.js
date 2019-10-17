const assert = require('assert');
const { formatMoney } = require('../helpers/formatMoney');
const INVALID_MSG = 'Invalid Number';

describe('Invalid Number', function() {
  it('should return invalid when the number is 123-', function() {
    assert.equal(formatMoney("123-"), INVALID_MSG)
  })
  it('should return invalid when the number is -', function() {
    assert.equal(formatMoney("-"), INVALID_MSG)
  })
  it('should return invalid when the number is .', function() {
    assert.equal(formatMoney("."), INVALID_MSG)
  })
  it('should return invalid when the number is -1.0.0', function() {
    assert.equal(formatMoney("-1.0.0"), INVALID_MSG)
  })
  it('should return invalid when the number is --', function() {
    assert.equal(formatMoney("--"), INVALID_MSG)
  })
  it('should return invalid when the number is abc', function() {
    assert.equal(formatMoney("abc"), INVALID_MSG)
  })
  it('should return invalid when the number is " "', function() {
    assert.equal(formatMoney(" "), INVALID_MSG)
  })
  it('should return invalid when the number is ""', function() {
    assert.equal(formatMoney(""), INVALID_MSG)
  })
  it('should return invalid when the number is -1-', function() {
    assert.equal(formatMoney("-1-"), INVALID_MSG)
  })
  it('should return invalid when the number is -1.-', function() {
    assert.equal(formatMoney("-1.-"), INVALID_MSG)
  })
  it('should return invalid when the number is 0.0', function() {
    assert.equal(formatMoney("--"), INVALID_MSG)
  })
})