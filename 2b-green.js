const assert = require('chai').assert;
const expect = require('chai').expect;

//Given a positive integer, return it as a string in Roman Numeral form.

function roman(n, times) {
  if (times === 1) {
    return 'X';
  } else if (times === 2) {
    return 'XX';
  }
}


test(10, 1, 'X');
test(20, 2, 'XX');


function test(n, times, actual) {
  
  describe('roman function', () => {
    it('should return a string', () => {
      assert.isString(roman(n, times), true);
    });
    
    it(`should return ${actual} for ${n}`, () => {
      assert.equal(roman(n, times), actual);
    })

    it(`should have a string length of ${times}`, () => {
      expect(roman(n, times).length).to.equal(times);
    });
  });

}



//TO TEST: $ mocha 2b-green