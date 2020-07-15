function solve(input) {
    let towns = [];
    let splitPattern = /\s*\|\s*/;

    for (let i = 1; i < input.length; i++) {
        let currentTown = {};
        let currentString = input[i].split(splitPattern).filter(x => x);

        currentTown['Town'] = currentString[0];
        currentTown['Latitude'] = +currentString[1];
        currentTown['Longitude'] = +currentString[2];

        towns.push(currentTown);        
    }

    let result = JSON.stringify(towns);
    console.log(result);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)