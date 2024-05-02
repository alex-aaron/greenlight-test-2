'use strict';

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();
// const _code = window.codeTester.getCodeToTest();

describe("test", function(){
    it('should run test correctly', function(){
        assert.equal('test', 'test');
    });
});

describe("#reduceEvens", function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(reduceEvens([1, 2, 3, 4])), true);
    });
    it('should return an array of even numbers', function(){
        assert.deepEqual(reduceEvens([1, 2, 3, 4]), [2, 4]);
    });
});