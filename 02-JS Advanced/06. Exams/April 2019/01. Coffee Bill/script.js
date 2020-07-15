function addProduct() {
    let productInput = document.querySelector('input[type="text"]');
    let priceInput = document.querySelector('input[type="number"]');
    let tableBody = document.getElementById('product-list');
    let totalPriceEl = document.querySelectorAll('tfoot tr td')[1];

    if (productInput.value && priceInput.value) {
        let row = tableBody.insertRow();

        let cell = row.insertCell();
        cell.textContent = productInput.value;
        
        cell = row.insertCell();
        cell.textContent = priceInput.value;

        let totalPrice = parseFloat(totalPriceEl.textContent);
        totalPrice += +priceInput.value;
        totalPriceEl.textContent = totalPrice;
    }
    
    productInput.value = '';
    priceInput.value = '';
}