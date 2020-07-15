function sortArray(arr, command) {
    if (command === 'asc') {
        return arr.sort((a,b) => {
            return a - b
        });
    } else if (command === 'desc') {
        return arr.sort((a,b) => {
            return b - a
        });
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));