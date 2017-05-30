const assert = require('chai').assert;
const expect = require('chai').expect;

//Given a positive integer, return it as a string in Roman Numeral form.

const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


function roman(n) {
  let result = '';

 for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] <= n){
      result += numerals[i];
      n -= numbers[i]
    }
  }
  
  return result; 
}


test(10, 1, 'X');
test(20, 2, 'XX');
test(11, 2, 'XI');
test(50, 1, 'L');


function test(n, times, actual) {
  
  describe('roman function', () => {
    it('should return a string', () => {
      assert.isString(roman(n), actual);
    });
    
    it(`should return ${actual} for ${n}`, () => {
      assert.equal(roman(n), actual);
    })

    it(`should have a string length of ${times}`, () => {
      expect(roman(n).length).to.equal(times);
    });
  });

}


//TO TEST: $ mocha 4b-green
