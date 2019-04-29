/*
/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;
  for (let length of [13, 16, 19]){
    it('has a prefix of 4 and a length of ' + length, function(){
      expect(detectNetwork('4' + '1'.repeat(length-1))).to.equal('Visa');
    })
  }
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  for (let prefix = 51; prefix < 56; prefix++){
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      expect(detectNetwork(prefix + '12345678912345')).to.equal('MasterCard');
    });
  }

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(prefix + '1234567891234')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix + '1234567891234567')).to.equal('Discover');
      });
     })(prefix);
  }
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789123')).to.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function () {
    expect(detectNetwork('6011123456789123456')).to.equal('Discover')
  });
 
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678901234123')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  let prefixes = ['5018', '5020', '5038', '6304'];
  prefixes.forEach(function(prefix){
    for (let length = 12; length <= 19; length++) {
      // (function(length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix + '1'.repeat(length - 4))).to.equal('Maestro');
        });
      // })(length);
    }
  });
});

describe('should support China UnionPay', function(){
  var expect = chai.expect;
  let lengths = [16, 17, 18, 19];
  lengths.forEach(function(length){
    for (let i = 622126; i <= 622926; i++){
      let prefix = String(i);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix + '1'.repeat(length - prefix.length))).to.equal('China UnionPay');
      });
    }
    for (let i = 624; i <= 626; i++){
      let prefix = String(i);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix + '1'.repeat(length - prefix.length))).to.equal('China UnionPay');
      });
    }
    for (let i = 6282; i <= 6288; i++){
      let prefix = String(i);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix + '1'.repeat(length - prefix.length))).to.equal('China UnionPay');
      });
    }
  });
});

describe('should support Switch', function(){
  var expect = chai.expect;
  let prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  prefixes.forEach(function(prefix){
      let lengths = [16, 18, 19];
    lengths.forEach(function(length){
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix + '1'.repeat(length - prefix.length))).to.equal('Switch');
      });
    })
  });
});


//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
