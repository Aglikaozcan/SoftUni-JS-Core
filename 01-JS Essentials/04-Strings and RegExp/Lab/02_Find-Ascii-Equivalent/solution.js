function solve() {
  let text = document.querySelector('#text').value;
  let result = document.querySelector('#result');
  let parts = text.split(' ');
  let words = '';
  let numbers = '';

  parts.forEach(part => {
    if (isNaN(+part)) {
      words = [...part]
        .map(ch => ch.charCodeAt(0))
        .join(' ');

      let p = document.createElement('p');
      p.innerHTML = words;
      result.appendChild(p);

    } else {
      numbers += String.fromCharCode(+part);      
    }
  });

  let p = document.createElement('p');
      p.innerHTML = numbers;
      result.appendChild(p);
}