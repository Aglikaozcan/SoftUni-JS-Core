const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
// if first parameter is not string, should return undefined
// if second parameter is not number, should return undefined
// if value of index is incorrect, should return Incorrect index
// if all parameters are valid, should return the character at the specified index

describe('lookupChar', function () {
    it('should return undefined with a non-string first parameter', function () {
        let expected = lookupChar(1,1);
        expect(expected).to.equal(undefined, 'first parameter should be string only');
    });
    it('should return undefined with a non-integer second parameter', function() {
        let expected = lookupChar('1','1');
        expect(expected).to.equal(undefined, 'second parameter should be integer only');
    });
    it('should return undefined with a non-integer second parameter', function() {
        let expected = lookupChar('1',1.5);
        expect(expected).to.equal(undefined, 'second parameter should be integer only (test with floating point number)');
    });
    it('should return "Incorrect index" with a negative index', function() {
        let expected = lookupChar('1',-1);
        expect(expected).to.equal("Incorrect index", 'the function did not return valid index');
    });
    it('should return "Incorrect index" with a bigger than length index', function() {
        let expected = lookupChar('1',3);
        expect(expected).to.equal("Incorrect index", 'the function did not return valid index');
    });
    it('should return "Incorrect index" with index equal to string length', function() {
        let expected = lookupChar('Hello',5);
        expect(expected).to.equal("Incorrect index", 'the function did not return correct value');
    });
    it('should return the character at the specified index', function() {
        let expected = lookupChar('Hello',0);
        expect(expected).to.equal("H", 'the function returns correct result');
    });
});