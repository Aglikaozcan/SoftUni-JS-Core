function solve(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = rows - 1;
    let endCol = cols - 1;
    let counter = 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = +counter;
            counter++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = counter;
            counter++
        }
        endCol--;

        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = counter;
            counter++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    for (let row in matrix) {
        console.log(matrix[row].join(' '));
    }
}

solve(5, 5);