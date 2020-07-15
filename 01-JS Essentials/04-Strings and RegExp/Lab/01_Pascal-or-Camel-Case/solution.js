function solve() {
  let input = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  function pascalOrCamelCase(input, convention) {
    //първо правим всичко с малки букви, разделено със спейс и махаме празните
    let split = input
      .toLowerCase()
      .split(' ')
      .filter(a => a !== '');

    let output = '';

    if (convention === 'Camel Case' || convention === 'Pascal Case') {
      for (let word of split) {
        output += word[0].toUpperCase() + word.substr(1).toLowerCase();
      }      
    } else {
      output = 'Error!';
    }

    if (convention === 'Camel Case') {
      output = output[0].toLowerCase() + output.substr(1);
    }

    document.getElementById('result').innerHTML = output;
  }

  pascalOrCamelCase(input, convention);
}