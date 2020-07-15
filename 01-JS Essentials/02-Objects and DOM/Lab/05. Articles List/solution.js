function createArticle() {
	//първо взимаме нужните полета
	let titleElement = document.getElementById('createTitle').value;
	let textElement = document.getElementById('createContent').value;
	let articleList = document.getElementById('articles');

	if (titleElement && textElement) {
		//създаваме новите полета
		let articleElement = document.createElement('article');

		let articleTitle = document.createElement('h3');
		articleTitle.textContent = titleElement;

		let articleText = document.createElement('p');
		articleText.textContent = textElement;

		//вкарваме ги по местата им
		articleElement.appendChild(articleTitle);
		articleElement.appendChild(articleText);
		articleList.appendChild(articleElement);
	}
	//накрая трябва да изтрием съдържанието в полетата
	document.getElementById('createTitle').value = "";
	document.getElementById('createContent').value = "";
}