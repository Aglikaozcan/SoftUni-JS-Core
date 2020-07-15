function createCounter() {
    let x = 0;
    return function () {
        console.log(x++);
    }
}

const f = createCounter();

f();