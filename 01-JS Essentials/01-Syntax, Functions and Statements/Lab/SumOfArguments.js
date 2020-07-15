function sum() {
    console.log("args count: " + arguments.length);
    console.log(arguments);

    let sum = 0;
    for (let x of arguments) {
        sum += x;
    }
    console.log("sum = " + sum);
}

sum(1, 2, 3);