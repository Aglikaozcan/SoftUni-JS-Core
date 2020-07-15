describe('isOddOrEven', function () {
    // if the parameter is not string(number)
    // if is object
    // if is even
    // if is odd

    it('test with number parameter, should return undefined', function () {
        let expected = isOddOrEven(100);

        expect(expected).to.equal(undefined, 'function did not return correct result');
    });
    it('test with object parameter, should return undefined', function () {
        let expected = isOddOrEven({ name: 'Ivo' });

        expect(expected).to.equal(undefined, 'function did not return correct result');
    });
    it('String parameter with even length, should return even', function () {
        let expected = isOddOrEven('evenString');

        expect(expected).to.equal('even', 'function returns correct result with even string length');
    });
    it('String parameter with odd length, should return odd', function () {
        let expected = isOddOrEven('even String');

        expect(expected).to.equal('odd', 'function returns correct result with odd string length');
    });
});