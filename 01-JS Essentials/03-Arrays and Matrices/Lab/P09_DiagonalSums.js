function solve(matrix) {   
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
    }

    let startRow = matrix.length -1;
    let startCol = 0;

    for (let i = 0; i < matrix.length; i++) {
        secondaryDiagonalSum += matrix[startRow][startCol];
        startRow--;
        startCol++;        
    }

    console.log(mainDiagonalSum, secondaryDiagonalSum);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
   );