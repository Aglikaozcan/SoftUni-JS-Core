function solve() {
    let text = document.getElementById('text').value;
    let number = +document.getElementById('number').value;

    if (text.length % number > 0) {
        let remainder = text.length % number;
        let charsToFill = number - remainder;
        text = text + text.substr(0, charsToFill);
    }

    let result = [];

    for (let i = 0; i < text.length; i += number) {
        result.push(text.substr(i, number));
    }

    let p = document.createElement('p');
    p.innerHTML = result.join(' ');

    let resultElement = document.getElementById('result');
    resultElement.appendChild(p);
}