function compute(a, b) {
    a = +a; //уверяваме се, че са числа
    b = +b;

    let greatestDivisor = 0;
    //въртим цикъл до по-малкото число
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            greatestDivisor = i;
        }
    }
    console.log(greatestDivisor);
}

compute(15, 5);