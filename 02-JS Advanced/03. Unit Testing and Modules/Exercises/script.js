const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined if parameter is non-number', function () {
            let expected = mathEnforcer.addFive('hi');
            expect(expected).to.equal(undefined, 'parameter should be a number');
        });
        it('should return number + 5 if parameter is positive number', function () {
            let expected = mathEnforcer.addFive(5);
            expect(expected).to.equal(10, 'the function works correct with positive number');
        });
        it('should return number + 5 if parameter is negative number', function () {
            let expected = mathEnforcer.addFive(-10);
            expect(expected).to.equal(-5, 'the function works correct with negative number');
        });
        it('should return number + 5 if parameter is floating-point number', function () {
            let expected = mathEnforcer.addFive(5.5);
            expect(expected).to.equal(10.5, 'the function works correct with floating-point number');
        });
    });
    describe('subtractTen', function () {
        it('should return undefined if parameter is non-number', function () {
            let expected = mathEnforcer.subtractTen('hi');
            expect(expected).to.equal(undefined, 'parameter should be a number');
        });
        it('should return number - 10 if parameter is positive number', function () {
            let expected = mathEnforcer.subtractTen(15);
            expect(expected).to.equal(5, 'the function works correct with positive number');
        });
        it('should return number - 10 if parameter is negative number', function () {
            let expected = mathEnforcer.subtractTen(-10);
            expect(expected).to.equal(-20, 'the function works correct with negative number');
        });
        it('should return number - 10 if parameter is floating-point number', function () {
            let expected = mathEnforcer.subtractTen(10.8);
            expect(expected).to.be.closeTo(0.8, 0.01, 'the function works correct with floating-point number');
        });
    });
    describe('sum', function () {
        it('sum with two positive numbers, should return their sum', function () {
            let expected = mathEnforcer.sum(1, 2);
            expect(expected).to.equal(3, 'the function returns the sum of two positive numbers');
        });
        it('sum with two negative numbers, should return their sum', function () {
            let expected = mathEnforcer.sum(-1, -2);
            expect(expected).to.equal(-3, 'the function returns the sum of two negative numbers');
        });
        it('sum with two floating-point numbers, should return their sum', function () {
            let expected = mathEnforcer.sum(1.2, 2.2);
            expect(expected).to.closeTo(3.4, 0.01, 'the function returns the sum of two floating-point numbers');
        });
        it('sum with one number and string, should return undefined', function () {
            let expected = mathEnforcer.sum(1, '-2');
            expect(expected).to.equal(undefined, 'input can be only number');
        });
        it('sum with string and number, should return undefined', function () {
            let expected = mathEnforcer.sum('1', -2);
            expect(expected).to.equal(undefined, 'input can be only number');
        });
    });
});