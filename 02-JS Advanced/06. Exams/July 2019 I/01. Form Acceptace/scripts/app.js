function acceptance() {	
	let warehouseElement = document.getElementById('warehouse');

	let company = document.querySelector('input[name="shippingCompany"]');
	let product = document.querySelector('input[name="productName"]');
	let quantity = document.querySelector('input[name="productQuantity"]');
	let scrape = document.querySelector('input[name="productScrape"]');

	let addButton = document.getElementById('acceptance');
	addButton.addEventListener('click', addNewProduct); // функцията се задава без скобите!!!

	function addNewProduct() {
		// проверяваме дали входните данни не са празни
		if (company.value && product.value && +quantity.value && +scrape.value) {
			let availableQuantity = quantity.value - scrape.value;

			// ако количеството е отрицателно, спира изпълнението
			if (availableQuantity <= 0) {
				return;
			}

			// създаваме новите елементи
			let div = document.createElement('div');
			let p = document.createElement('p');
			let btn = document.createElement('button');

			btn.textContent = 'Out of stock';
			btn.addEventListener('click', function() {
				div.remove();
			});

			p.textContent = `[${company.value}] ${product.value} - ${availableQuantity} pieces`;
			div.appendChild(p);
			div.appendChild(btn);
			warehouseElement.appendChild(div);
		}

		company.value = '';
		product.value = '';
		quantity.value = '';
		scrape.value = '';
	}
}