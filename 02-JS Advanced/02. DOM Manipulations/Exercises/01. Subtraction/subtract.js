function subtract() {
    let inputElements = document.getElementsByTagName('input');

    [...inputElements]
        .forEach(element => element.removeAttribute('disabled'));

    let firstNumber = Number(inputElements[0].value);
    let secondNumber = Number(inputElements[1].value);

    let result = document.getElementById('result');
    result.textContent = firstNumber - secondNumber;
}