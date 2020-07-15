function solve(n, k) {
    let arr = [];
    arr[0] = +1;
    
    let nextEl = 0;

    for (let j = 1; j < k; j++) {
        nextEl += arr[j - 1];
        arr.push(nextEl);
    }

    for (let i = arr.length - k; i < n - k; i++) {
        nextEl += arr[i];
        arr.push(nextEl);
    }

    console.log(arr);
}

solve(6, 3);