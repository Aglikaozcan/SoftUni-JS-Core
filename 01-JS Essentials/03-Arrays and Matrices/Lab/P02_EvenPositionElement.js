function even(arr) {
    let newString = "";

    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newString += arr[i] + " ";
        }
    }

    console.log(newString);
}

even(['20', '30', '40']);