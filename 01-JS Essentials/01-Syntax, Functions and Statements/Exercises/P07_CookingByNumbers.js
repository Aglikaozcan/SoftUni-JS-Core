function cooking(input) {
    let number = +input[0];

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        if (command === 'chop') {
            number /= 2;
        } else if (command === 'dice') {
            number = Math.sqrt(number);
        } else if (command === 'spice') {
            number++;
        } else if (command === 'bake') {
            number *= 3;
        } else if (command === 'fillet') {
            number *= 0.8;
        }

        console.log(number);
    }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);