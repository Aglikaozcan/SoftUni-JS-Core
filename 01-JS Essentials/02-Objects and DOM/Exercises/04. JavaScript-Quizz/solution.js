function solve() {
  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let sections = document.getElementsByTagName('section');
  let lastSection = sections[sections.length - 1];
  let index = 0;
  let points = 0;
  let p = document.getElementsByTagName('p');

  for (let element of p) {
    element.addEventListener('click', function () {
      let currentSection = sections[index];

      if (element.innerHTML === rightAnswers[index]) {
        points++;
      }

      currentSection.style.display = 'none';

      if (currentSection === lastSection) {
        let resultElement = document.getElementsByTagName('h1')[1];
        let result = document.getElementById('results');
        result.style.display = 'block';

        if (points === 3) {
          resultElement.textContent = `You are recognized as top JavaScript fan!`;
        } else {
          resultElement.textContent = `You have ${points} right answers`;
        }
      } else {
        sections[index + 1].style.display = 'block';
        index++;
      }
    });
  }
}
