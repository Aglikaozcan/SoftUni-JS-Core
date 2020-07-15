function solve(vignettes) {
    let towns = [];

    for (let vignette of vignettes) {
        let currentTown = { name: vignette.town, profit: vignette.price, count: 1 };

        if (!towns.find(t => t.name === currentTown.name)) {
            towns.push(currentTown);
        } else {
            towns.find(t => t.name === currentTown.name).profit += vignette.price;
            towns.find(t => t.name === currentTown.name).count++;
        }
    }

    towns.sort((a, b) => (b.profit - a.profit) || (b.count - a.count) || a.name.localeCompare(b.name));
    let mostProfitableTown = towns[0].name;
    console.log(`${mostProfitableTown} is most profitable - ${towns[0].profit} BGN`);

    let popularCars = vignettes.filter(x => x.town === mostProfitableTown);
    let popularModel = [];

    for (let car of popularCars) {
        car.count = 1;
        let currentModel = car.model;

        if (!popularModel.find(m => m.model === currentModel)) {
            popularModel.push(car);
        } else {
            popularModel.find(m => m.model === currentModel).count++;
        }
    }

    popularModel.sort((a, b) => (b.count - a.count) || (b.price - a.price) || a.model.localeCompare(b.model));
    let model = popularModel[0].model;
    console.log(`Most driven model: ${model}`);

    let townsOfPopularModel = vignettes.filter(x => x.model === model);
    let popularTowns = [];

    for (let town of townsOfPopularModel) {
        let currentTown = { name: town.town, cars: [town.regNumber] };

        if (!popularTowns.find(t => t.name === currentTown.name)) {
            popularTowns.push(currentTown);
        } else {
            let car = popularTowns.find(t => t.name === currentTown.name).cars;
            car.push(town.regNumber);
        }
    }

    popularTowns.sort((a, b) => a.name.localeCompare(b.name));

    for (let town of popularTowns) {
        let cars = town.cars;
        cars.sort((a, b) => a.localeCompare(b));
        console.log(`${town.name}: ${cars.join(', ')}`);
    }
}

solve([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }]
);