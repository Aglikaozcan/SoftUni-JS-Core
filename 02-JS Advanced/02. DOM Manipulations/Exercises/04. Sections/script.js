function create(words) {
   let container = document.getElementById('content');

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', () => {
         p.style.display = 'inline-block';
      });    
      container.appendChild(div);
   }
}