function getData() {
	//първо си взимаме полетата
	let input = JSON.parse(document.querySelector('textarea').value);
	let peopleInP = document.querySelector('#peopleIn p');
	let blacklistP = document.querySelector('#blacklist p');
	let peopleOutP = document.querySelector('#peopleOut p');
	let lastElement = input.pop();

	//създаваме масиви, в които ще вкарваме данните от инпута
	let peopleIn = [];
	let peopleOut = [];
	let blackList = [];

	//започваме да обработваме инпута
	for (const person of input) {

		let action = person.action;
		//console.log(action);
		let currentName = {
			firstName: person.firstName,
			lastName: person.lastName
		};

		if (action === 'peopleIn') {
			if (!blackList.find(p => p.firstName === currentName.firstName &&
				p.lastName === currentName.lastName)) {
				peopleIn.push(currentName); //ако го няма, го добавяме
			}
		} else if (action === 'peopleOut') {
			if (peopleIn.find(p => p.firstName === currentName.firstName &&
				p.lastName === currentName.lastName)) {

				let index = peopleIn.findIndex(p => p.firstName === currentName.firstName &&
					p.lastName === currentName.lastName);

				peopleIn.splice(index, 1); //махаме този елемент
				peopleOut.push(currentName); //добавяме го тук
			}
		} else if (action === 'blacklist') {
			if (peopleIn.find(p => p.firstName === currentName.firstName &&
				p.lastName === currentName.lastName)) {

				let index = peopleIn.findIndex(p => p.firstName === currentName.firstName &&
					p.lastName === currentName.lastName);

				peopleIn.splice(index, 1);
				peopleOut.push(currentName);
			}
			blackList.push(currentName);
		}
	}

	//подреждаме и разпечатваме
	let output = {};

	//задаваме ключове в обекта
	output['peopleIn'] = peopleIn;
	output['peopleOut'] = peopleOut;
	output['blackList'] = blackList;

	//console.log(output);
	if (lastElement.action !== '' && lastElement.criteria !== '') {
		let criteria = lastElement.criteria;
		let action = lastElement.action;
		//в аутпута трябва да добавим и екшъна, за да можем да сортираме по него
		output[action] = output[action]
			.sort((a, b) => a[criteria].localeCompare(b[criteria]));
			//сортиране по азб. ред на база на критерия
	}
	//console.log(output); проверка

	peopleInP.textContent = output.peopleIn
		.map(x => JSON.stringify(x))
		.join(' ');
	peopleOutP.textContent = output.peopleOut
		.map(x => JSON.stringify(x))
		.join(' ');
	blacklistP.textContent = output.blackList
		.map(x => JSON.stringify(x))
		.join(' ');
}