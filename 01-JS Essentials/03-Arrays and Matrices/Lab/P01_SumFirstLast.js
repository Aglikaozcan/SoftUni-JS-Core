function sum(arr) {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    let sum = +firstElement + +lastElement;

    console.log(sum);
}

sum (['20', '30', '40']);