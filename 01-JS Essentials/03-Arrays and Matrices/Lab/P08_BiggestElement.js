function solve(matrix) {
    let newArr = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            newArr.push(matrix[row][col]);            
        }        
    }

    let orderedArr = newArr.sort((a, b) => b - a);
    console.log(orderedArr[0]);
}

solve([[20, 50, 10],
    [8, 33, 145]]
   );