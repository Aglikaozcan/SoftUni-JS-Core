function solve(arr) {
    let targetNumber = arr.shift(0);
    let firstElements = [];
    let lastElements = [];

    for (let i = 0; i < targetNumber; i++) {
        firstElements += arr[i] + " ";        
    }
    for (let i = arr.length - targetNumber; i < arr.length; i++) {
        lastElements += arr[i] + " ";        
    }
    console.log(firstElements);
    console.log(lastElements);
}

solve ([2, 7, 8, 9]);