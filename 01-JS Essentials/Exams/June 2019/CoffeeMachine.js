function coffeeMachine(input) {

    let totlaMoney = 0;

    input.forEach(order => {
        let [coins, drink] = order.split(', ');
        let sugar = Number(order.split(', ').pop());

        let price = 0.80;

        if (order.includes('milk')) {
            price += 0.10;
        }
        if (order.includes('decaf')) {
            price += 0.10;
        }
        if (sugar > 0) {
            price += 0.10;
        }

        if (+coins >= price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(coins - price).toFixed(2)}$`);
            totlaMoney += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${Math.abs(coins - price).toFixed(2)}$ more.`);
        }
    });

    console.log(`Income Report: ${totlaMoney.toFixed(2)}$`);
};

coffeeMachine(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);