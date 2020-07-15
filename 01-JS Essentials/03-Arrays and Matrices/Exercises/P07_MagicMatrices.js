function solve(matrix) {
    let rowArr = [];
    let colArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            currentRowSum += matrix[i][j];
        }
        rowArr.push(currentRowSum);

        if (rowArr[0] !== currentRowSum) {
            console.log('false');
            return;           
        }
    }

    for (let j = 0; j < matrix.length; j++) {
        let currentColSum = 0;

        for (let i = 0; i < matrix.length; i++) {
            currentColSum += matrix[i][j];
        }
        colArr.push(currentColSum);

        if (rowArr[j] !== colArr[j]) {
            console.log('false');
            return;           
        }
    }

    console.log('true');
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
);