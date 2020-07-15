(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = document.getElementById('cat-template').innerHTML;
        let compiled = Handlebars.compile(template);
        let rendered = compiled({ cats: window.cats });

        document.querySelector('#allCats ul').innerHTML = rendered;

        [...document.getElementsByClassName('showBtn')]
            .forEach(btn => {
                btn.addEventListener('click', showDetails);
            });
    }

    function showDetails() {
        let btn = this;

        if (btn.textContent === 'Show status code') {
            btn.textContent = 'Hide status code';
            btn.nextElementSibling.style.display = 'block';
        } else {
            btn.textContent = 'Show status code'; 
            btn.nextElementSibling.style.display = 'none';
        }
    }
})();
