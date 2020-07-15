function solve(arr) {
    let newArr = [];
    let initialNumber = 1;

    for (let element of arr) {
        if (element === 'add') {
            newArr.push(initialNumber);
        } else if (element === 'remove') {
            newArr.pop();
        }

        initialNumber++;
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']);