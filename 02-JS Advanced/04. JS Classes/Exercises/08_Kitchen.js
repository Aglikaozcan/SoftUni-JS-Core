class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
        this.count = 0;
    }

    loadProducts(products) {
        for (let element of products) {
            let [name, quantity, price] = element.split(' ');

            if (this.budget >= price) {
                if (!this.productsInStock[name]) {
                    this.productsInStock[name] = +quantity;
                } else {
                    this.productsInStock[name] += +quantity;
                }

                this.budget -= price;

                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }
        
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        let message = '';
        let ingredients = {};

        for (let element of neededProducts) {
            let tokens = element.split(' ');
            let quantity = Number(tokens.pop());
            let name = tokens.join(' ');

            ingredients[name] = quantity;
        }

        if (!this.menu[meal]) {
            this.menu[meal] = { mealName: meal, ingredients, price: Number(price) };
            this.count++;

            message = `Great idea! Now with the ${meal} we have ${this.count} meals in the menu, other ideas?`;
        } else {
            message = `The ${meal} is already in our menu, try something different.`;
        }

        return message;
    }

    showTheMenu() {
        let output = '';

        if (this.count === 0) {
            output = `Our menu is not ready yet, please come later...`;
        }

        for (let meal in this.menu) {
            output += `${meal} - $ ${this.menu[meal].price}\n`;
        }

        return output.trim();
    }

    makeTheOrder(meal) {
        let message = '';

        if (!this.menu[meal]) {
            message = `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else if (this.menu[meal]) {
            for (let product in this.menu[meal].ingredients) {
                if (!this.productsInStock[product]) {
                    message = `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            for (let product in this.menu[meal].ingredients) {
                this.productsInStock[product] -= product.quantity;
            }
            this.budget += this.menu[meal].price;

            message = `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }

        return message;
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Pizza'));