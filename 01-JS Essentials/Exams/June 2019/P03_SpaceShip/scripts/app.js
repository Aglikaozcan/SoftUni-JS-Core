function spaceshipCrafting() {
    //take input
    let titaniumCoreFound = Number(document.getElementById('titaniumCoreFound').value);
    let aluminiumCoreFound = Number(document.getElementById('aluminiumCoreFound').value);
    let magnesiumCoreFound = Number(document.getElementById('magnesiumCoreFound').value);
    let carbonCoreFound = Number(document.getElementById('carbonCoreFound').value);
    let lossesPercent = Number(document.getElementById('lossesPercent').value);

    //found cores
    let cores = {
        titanium: titaniumCoreFound,
        aluminium: aluminiumCoreFound,
        magnesium: magnesiumCoreFound,
        carbon: carbonCoreFound
    };

    //losses
    Object.keys(cores).forEach(val => cores[val] *= 1 - ((lossesPercent / 100) / 4));

    //converting into bars
    let productPrices = {
        titanium: 25,
        aluminium: 50,
        magnesium: 75,
        carbon: 100
    };

    let availableBars = convert(cores, productPrices);
    Object.keys(availableBars).forEach(val => availableBars[val] = Math.round(availableBars[val]));
    //console.log(availableBars);

    function convert(obj1, obj2) {
        Object.keys(obj1)
            .forEach(val => obj1[val] = obj1[val] / obj2[val]);
        return obj1;
    }

    function isBiggerOrEqual(a, b) {
        if (Object.keys(a).every(val => a[val] >= b[val])) {
            return true;
        } else {
            return false;
        }
    }

    function extract(obj1, obj2) {
        Object.keys(obj1)
            .forEach(val => obj1[val] -= obj2[val]);
        return obj1;
    }

    //building spaceships
    let spaceships = [
        {
            name: 'THE-UNDEFINED-SHIP',
            materials: { titanium: 7, aluminium: 9, magnesium: 7, carbon: 7 },
            count: 1
        },
        {
            name: 'NULL-MASTER',
            materials: { titanium: 5, aluminium: 7, magnesium: 7, carbon: 5 },
            count: 1
        },
        {
            name: 'JSON-CREW',
            materials: { titanium: 3, aluminium: 5, magnesium: 5, carbon: 2 },
            count: 1
        },
        {
            name: 'FALSE-FLEET',
            materials: { titanium: 2, aluminium: 2, magnesium: 3, carbon: 1 },
            count: 1
        }
    ];
    let builtShips = [];

    while (Object.keys(availableBars).every(val => availableBars[val] > 0)) {
        for (let ship of spaceships) {
            let materials = ship.materials;
            let currentName = ship.name;

            if (isBiggerOrEqual(availableBars, materials)) {
                extract(availableBars, materials);
                if (!builtShips.find(s => s.name === currentName)) {
                    builtShips.push(ship);
                } else {
                    builtShips.find(s => s.name === currentName).count++;
                }
            }
        }
    }
    //console.log(builtShips);
    //console.log(availableBars);

    //printing
    let resultBars = [];
    let resultShips = [];

    Object.entries(availableBars).forEach(([key, value]) => {
        resultBars.push(`${value} ${key} bars`);
    });

    for (let ship of builtShips) {
        resultShips.push(`${ship.count} ${ship.name}`);
    }

    let availableBarsText = document.querySelector('#availableBars p');
    let builtShipsText = document.querySelector('#builtSpaceships p');

    availableBarsText.textContent = resultBars.join(', ');
    builtShipsText.textContent = resultShips.join(', ');
}