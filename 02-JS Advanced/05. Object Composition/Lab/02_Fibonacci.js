const getFibonator = () => {
    let currentNumber = 0;
    let nextNumber = 1;
    return () => {
        const result = currentNumber;
        currentNumber = nextNumber;
        nextNumber = currentNumber + result;
        return result;
    };
};

const fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());