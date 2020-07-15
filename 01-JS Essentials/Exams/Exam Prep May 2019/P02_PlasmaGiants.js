function solve(arr, cutSize) {

    //cut arrays in two pieces
    let firstHalf = arr.slice(0, arr.length / 2);
    let secondHalf = arr.slice(arr.length / 2);

    //create giants and get sum of the products of the two giants
    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while (firstHalf.length > 0 && secondHalf.length > 0) {
        firstGiantLife += firstHalf.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiantLife += secondHalf.splice(0, cutSize).reduce((a, b) => a * b);
    }

    //fight
    let damagePerHit = Math.min(...arr); //взимаме само числата от масива
    let deadline = Math.max(...arr);
    let rounds = 1;
    
    if (damagePerHit !== 0) {
        while (firstGiantLife > deadline && secondGiantLife > deadline) {
            firstGiantLife -= damagePerHit;
            secondGiantLife -= damagePerHit;
            rounds++;
        }
    }

    //print
    if (firstGiantLife === secondGiantLife) {
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
    } else if (firstGiantLife > secondGiantLife) {
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`);
    }
}

solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);