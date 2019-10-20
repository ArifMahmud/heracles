const assert = require('assert');
const { formatMoney } = require('../helpers/formatMoney');

describe('Special Number', function() {
  it('should return 0.13 when the number is 0000000.1267', function() {
    assert.equal(formatMoney("0000000.1267"), "0.13")
  })
  it('should return 0.00 when the number is -0.0', function() {
    assert.equal(formatMoney("-0.0"), "0.00")
  })
  it('should return 0.00 when the number is -000000.00000000', function() {
    assert.equal(formatMoney("-000000.00000000"), "0.00")
  })
  it('should return 0.00 when the number is 000000.00000000', function() {
    assert.equal(formatMoney("000000.00000000"), "0.00")
  })
  it('should return -0.00 when the number is -0', function() {
    assert.equal(formatMoney("-0"), "0.00")
  })
  it('should return 0.00 when the number is 0', function() {
    assert.equal(formatMoney("0"), "0.00")
  })
  it('should return 0.00 when the number is 0.0000', function() {
    assert.equal(formatMoney("0.0000"), "0.00")
  })
  it('should return 10.00 when the number is 9.999', function() {
    assert.equal(formatMoney("9.999"), "10.00")
  })
  it('should return 1 000.00 when the number is 999.999', function() {
    assert.equal(formatMoney("999.999"), "1 000.00")
  })
  it('should return 1 240.00 when the number is 1239.9999', function() {
    assert.equal(formatMoney("1239.9999"), "1 240.00")
  })
})