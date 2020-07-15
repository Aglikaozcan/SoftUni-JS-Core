function solve(arr) {
    let step = arr.pop();
    let newArr = [];
    newArr.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (i % +step === 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join('\n'));
}

solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']
);