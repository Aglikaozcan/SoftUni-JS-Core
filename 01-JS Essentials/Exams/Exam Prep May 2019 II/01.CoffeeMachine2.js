function coffeeMachine(input) {
    let income = 0;

    for (let order of input) {
        let [coins, drink, decaf, milk, sugar] = order.split(', ');

        let price = 0.80;

        if (order.includes('milk')) {
            price += 0.10;
        }

        if (order.includes('decaf')) {
            price += 0.10;
        }

        if (Number(order.split(', ').pop()) > 0) {
            price += 0.10;
        }

        if (+coins >= price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(+coins - price).toFixed(2)}$`);
            income += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(price - coins).toFixed(2)}$ more`);
        }
    }
    console.log(`Income Report: ${income.toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', 
                '0.40, tea, milk, 2',
                '1.00, coffee, decaf, 0']);