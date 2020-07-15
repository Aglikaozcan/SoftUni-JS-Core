function increment(param) {
    if (Array.isArray(param)) {
        let result = [];
        for (let val of param) {
            result.push(val + 1);
        }
        return result;
    } else {
        return param + 1;
    }
}

console.log(increment([4, 5, 6]));
console.log(increment(5));
