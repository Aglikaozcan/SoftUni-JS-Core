function sum(n, m) {
    let total = 0;
    for (let i = +n; i <= +m; i++){
        total += i;
    }
    console.log(total);
}

sum('1', '5');