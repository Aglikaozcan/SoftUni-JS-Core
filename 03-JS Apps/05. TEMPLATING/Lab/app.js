(async function () {
    const { getTemplateFunc, getTemplateString } = window.templates;

    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial('card', cardTemplate);

    const cardsListFunc = await getTemplateFunc('cards');

    document.getElementById('contacts').innerHTML = cardsListFunc({ contacts });

    [...document.getElementsByClassName('detailsBtn')]
        .forEach(btn => {
            btn.addEventListener('click', handleDetails);
        });

    const handleDetails = (event) => {
        console.log(event.target);
    };
})(); 