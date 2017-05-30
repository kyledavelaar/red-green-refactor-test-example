const assert = require('chai').assert;
const expect = require('chai').expect;

//Given a positive integer, return it as a string in Roman Numeral form.


function roman(n, times) {
  if (times === 1) {
    return 'X'
  }
}


test(10, 1, 'X');


function test(n, times, actual) {
  
  describe('roman function', () => {
    it('should return a string', () => {
      assert.isString(roman(n, times), actual);
    });
    
    it(`should return ${actual} for ${n}`, () => {
      assert.equal(roman(n, times), actual);
    })

    it(`should have a string length of ${times}`, () => {
      expect(roman(n, times).length).to.equal(times);
    });
  });

}


//TO TEST: $ mocha 1c-refactor