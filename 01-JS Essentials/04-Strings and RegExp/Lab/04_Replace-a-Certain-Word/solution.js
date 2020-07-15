function solve() {

    let replacementWord = document.getElementById('word').value;
    let text = document.getElementById('text').value;
    let resultArea = document.getElementById('result');

    let parts = JSON.parse(text);
    let wordToReplace = parts[0].split(' ')[2];
    let pattern = new RegExp(wordToReplace, 'gi');

    parts = parts.map(part => part.replace(pattern, replacementWord));

    parts.forEach(part => {
        let p = document.createElement('p');
        p.innerHTML = part;
        resultArea.appendChild(p);
    });
}