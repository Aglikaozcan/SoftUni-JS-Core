function solve() {   
    let convertElement = document.getElementById('selectMenuTo');

    let binaryElement = document.createElement('option');
    binaryElement.value = 'binary';
    binaryElement.text = 'Binary';
    convertElement.appendChild(binaryElement);

    let hexElement = document.createElement('option');
    hexElement.value = 'hexadecimal';
    hexElement.text = 'Hexadecimal';
    convertElement.appendChild(hexElement);

    let inputElement = document.getElementById('input'); 
    let resultElement = document.getElementById('result');

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function () {
        let input = inputElement.value;

        if (convertElement.value === 'binary') {
            resultElement.value = (+input).toString(2);
        } else if (hexElement.value = 'hexadecimal') {
            resultElement.value = (+input).toString(16).toUpperCase();
        }
    })
}