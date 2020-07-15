function solve(arr) {
    let rotations = arr.pop();

    for (let i = 0; i < rotations % arr.length; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);