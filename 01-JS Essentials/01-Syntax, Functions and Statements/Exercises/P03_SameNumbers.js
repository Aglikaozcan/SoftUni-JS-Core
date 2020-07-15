function sameNumbers(number) {
    //първо трябва да превърнем числото в стринг или масив, за да можем да го обхождаме
    number = number.toString();
    let isSame = true;
    let firstNum = number[0];
    let sumOfDigits = +firstNum;

    for (let i = 1; i <= number.length - 1; i++) {
        sumOfDigits += +number[i];

        if (firstNum !== number[i]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sumOfDigits);
}

sameNumbers(1234);