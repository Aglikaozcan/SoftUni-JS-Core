const { expect } = require('chai');
const { sum, subtract } = require('../calculator');

describe('Calculator tests', () => {
    describe('sum', () => {
        describe('Valid', () => {
            it('expect sum(1, 2) to be equal to 3', () => {
                const expected = 3;
                const actual = sum(1, 2);

                expect(actual).to.be.equal(expected);
            });

            it('expect sum(-1, -2) to be equal to -3', () => {
                const expected = -3;
                const actual = sum(-1, -2);

                expect(actual).to.be.equal(expected);
            });

            it('expect sum(0, 1) to be equal to 1', () => {
                const expected = 1;
                const actual = sum(0, 1);

                expect(actual).to.be.equal(expected);
            });
        });

        describe('Invalid', () => {
            it('expect sum(0) to be NaN', () => {
                const actual = sum(0);

                expect(actual).to.be.NaN;
            });

            it('expect sum() to be NaN', () => {
                const actual = sum();

                expect(actual).to.be.NaN;
            });

            it('expect sum(1, 2, 3) to be 3', () => {
                const expected = 3;
                const actual = sum(1, 2, 3);

                expect(actual).to.be.equal(expected);
            });
        });
    });
});