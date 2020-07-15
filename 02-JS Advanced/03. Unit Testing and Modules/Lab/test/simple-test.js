const expect = require('chai').expect;

it('Expect 2 + 1 to be equal to 3', () => {
    // Arrange
    const result = 2 + 1;

    // Act
    const expected = 3;

    // Assert
    expect(result).to.be.equal(expected);
});