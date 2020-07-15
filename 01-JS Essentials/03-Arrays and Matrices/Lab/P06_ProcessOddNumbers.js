function solve(arr) {
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }

    let newArr = oddArr
        .map(el => el * 2)
        .reverse();

    console.log(newArr.join(' '));
}

solve([10, 15, 20, 25]);