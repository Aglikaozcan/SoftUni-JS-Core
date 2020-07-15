function addItem() {
    const getNewItemText = () => document.getElementById('newItemText').value;

    const getNewItemValue = () => document.getElementById('newItemValue').value;

    const createNewOptionElement = () => document.createElement('option');

    const appendOptionElement = (optionElement) => {
        let selectMenu = document.getElementById('menu');
        selectMenu.appendChild(optionElement);
    };

    const clearInput = () => {
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    };

    let newItemText = getNewItemText();
    let newItemValue = getNewItemValue();
    if (newItemText !== '' && newItemValue !== '') {
        let optionElement = createNewOptionElement();

        optionElement.textContent = newItemText;
        optionElement.setAttribute('value', newItemValue);
    
        appendOptionElement(optionElement);
        clearInput();
    }    
}