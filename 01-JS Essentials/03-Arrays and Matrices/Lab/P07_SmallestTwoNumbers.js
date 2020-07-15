function solve(arr) {
    let sortedArr = arr
        .sort((a, b) => a - b)
        .slice(0, 2);

    console.log(sortedArr.join(" "));
}

solve([30, 15, 50, 5]);