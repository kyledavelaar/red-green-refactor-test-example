const assert = require('chai').assert;

//Given a positive integer, return it as a string in Roman Numeral form.


function roman(n) {
  return 'X';
}


describe('roman function', () => {

  it('should return a string', () => {
    assert.isString(roman(10), "X");
  });
  
  it('should return X for 10', () => {
    assert.equal(roman(10), 'X');
  })
  
});



//TO TEST: $ mocha 1b-green