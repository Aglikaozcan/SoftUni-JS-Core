/**
 * 
 * @param {string} typeOfFruit 
 * @param {number} weight 
 * @param {number} price 
 */
function calculate(fruit, weight, price) {
    weight /= 1000;
    let money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

calculate('apple', 1563, 2.35);