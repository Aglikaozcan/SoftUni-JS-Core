function focus() {
    //за да можем да използваме this, представянето не бива да е с arrow func () => {}
    const onFocus = function () {
        //console.log(this.parentNode); //проверяваме, дали работи правилно

        this.parentNode.classList.add('focused'); //тук this сочи към инпута

        //това focused трябва да се провери в css файла, за правилното изписване
        //classList добавя 'focused' към атрибута class в инпута
    };

    // може и така да се изпише
    // function onFocus(event) {
    //     let input = event.target;
    //     input.parentNode.setAttribute('class', 'focused');
    // }


    const onBlur = function () {
        this.parentNode.classList.remove('focused');
    };

    //първо взимаме всички инпути
    //document.querySelector('input') на това искаме да използваме forEach,
    //но трябва да го деструктурираме, за да има вид на списък
    [...document.querySelectorAll('input')]
        .forEach(input => {
            input.addEventListener('focus', onFocus);
            input.addEventListener('blur', onBlur);
        });
}