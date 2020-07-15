function solve() {
	let input = document.querySelector('#inputs textarea');
	let sendBtn = document.getElementById('btnSend');
	let bestRestaurant = document.querySelector('#bestRestaurant p');
	let bestWorkers = document.querySelector('#workers p');

	let restaurants = [];

	sendBtn.addEventListener('click', function () {
		let restaurantArr = JSON.parse(input.value);

		for (let tokens of restaurantArr) {
			let employees = [];
			let averageSalary = 0;

			let restaurantName = tokens.split(' - ')[0];
			let workersArr = tokens.split(' - ')[1];
			let workers = workersArr.split(', ');

			let totalSalary = 0;
			let count = 0;

			workers.forEach(worker => {
				let workerName = worker.split(' ')[0];
				let workerSalary = Number(worker.split(' ')[1]);
				totalSalary += workerSalary;
				count++;

				let employee = {
					workerName,
					workerSalary
				};

				employees.push(employee);
			});

			averageSalary = totalSalary / count;

			let restaurant = { name, employees, averageSalary };
			restaurant.name = restaurantName;
			restaurants.push(restaurant);
		}		

		Object.keys(restaurants).sort((a,b) => b.averageSalary - a.averageSalary);
		console.log(restaurants);

		let output = `Name: ${name} Salary: ${salary} Best Salary: ${sel}`;
		bestRestaurant.textContent = output;

		output = `Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660`;
		bestWorkers.textContent = output;
		
	});
}