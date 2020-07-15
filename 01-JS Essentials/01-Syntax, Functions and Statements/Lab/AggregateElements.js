
/**
 * 
 * @param {Array} arr 
 * @param {Number} accumulator 
 * @param {Function} operator 
 */
function aggregate(arr, accumulator, operator) {
    for (let i = 0; i < arr.length; i++) {
        accumulator = operator(accumulator, arr[i]);
    }
    return accumulator;
}

console.log(aggregate([1, 2, 3, 4], 2, (a, b) => a * b));