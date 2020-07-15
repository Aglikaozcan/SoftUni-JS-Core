function solve(matrix1, matrix2) {
    let newMat = [];

    for (let row = 0; row < matrix1.length; row++) {

        newMat[row] = [];

        for (let col = 0; col < matrix1[row].length; col++) {

            let sum = matrix1[row][col] + matrix2[row][col];
            newMat[row][col] = sum;
        }
    }

    for (let row = 0; row < newMat.length; row++) {
        for (let col = 0; col < newMat[row].length; col++) {

            //ако е двуцифрено число, но не последна колона
            if (newMat[row][col] > 9 && col < newMat[row].length - 1) {
                
                let remainder = newMat[row][col] - 9;

                newMat[row][col] = 9;
                newMat[row][col + 1] += remainder;
                
            } else if (newMat[row][col] > 9 && col === newMat[row].length - 1) {
                
                let remainder = newMat[row][col] - 9;

                newMat[row][col] = 9;
                newMat[row][col + 1] = remainder;
            }
        }
    }
    console.log(JSON.stringify(newMat));
}

solve([[9, 9], [4, 7]],
    [[7, 1], [1, 2]]
    );