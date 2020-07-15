function solve(arrOfStrings) {
    let numberMatrix = arrOfStrings
        .map((el) => {
            return el.split(' ');
        });

    for (let i = 0; i < numberMatrix.length; i++) {
        for (let j = 0; j < numberMatrix[i].length; j++) {
            numberMatrix[i][j] = +numberMatrix[i][j];
        }
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < numberMatrix.length; i++) {
        let lastIndex = numberMatrix.length - 1;
        firstDiagonalSum += numberMatrix[i][i];
        secondDiagonalSum += numberMatrix[i][lastIndex - i];
    }

    if (firstDiagonalSum !== secondDiagonalSum) {
        for (let arr of numberMatrix) {
            console.log(arr.join(' '));
        }
    } else {
        for (let i = 0; i < numberMatrix.length; i++) {
            let lastIndex = numberMatrix.length - 1;
            
            for (let j = 0; j < numberMatrix[i].length; j++) {
                if (i !== j && i !== (lastIndex - j)) {
                    numberMatrix[i][j] = firstDiagonalSum;
                }
            }
        }

        for (let arr of numberMatrix) {
            console.log(arr.join(' '));
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);