function solve(input) {
    let townRegister = {};

    for (let i = 0; i < input.length; i++) {
        let currentTown = input[i].split(" <-> ");

        townName = currentTown[0];
        townPopulation = Number(currentTown[1]);

        if(!townRegister[townName]) {
            townRegister[townName] = 0;
        }
        townRegister[townName] += townPopulation;
    }

    for (const town in townRegister) {
        console.log(`${town} : ${townRegister[town]}`);
    }
}

solve(["Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000"
])