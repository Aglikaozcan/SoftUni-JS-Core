function solve(arr) {
    let filteredArr = [];
    let currentBiggest = 0;

    for (let i = 0; i < arr.length; i++) {  
        if (arr[i] >= currentBiggest) {
            currentBiggest = arr[i];
            filteredArr.push(currentBiggest);
        }
    }

    console.log(filteredArr.join('\n'));
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );