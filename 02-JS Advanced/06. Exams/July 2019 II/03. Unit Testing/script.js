const expect = require('chai').expect;

class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}

let pizza = new PizzUni();
console.log(pizza.registerUser('dada'));
console.log(pizza.makeAnOrder('dada', 'Italian Style', 'Coca-Cola'));
console.log(pizza.detailsAboutMyOrder(0));
console.log(pizza.doesTheUserExist('dada'));
console.log(pizza.completeOrder());


describe('Pizza Class', function () {
    let pizza;
    beforeEach(() => {
        pizza = new PizzUni();
    });

    it('if constructor works correctly', function () {
        expect(pizza.registeredUsers).to.deep.equal([]);
        expect(pizza.availableProducts).to.deep.equal({
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        });
        expect(pizza.orders).to.deep.equal([]);
    });

    it('if registerUser takes string', function () {
        expect(pizza.registerUser('dada')).to.deep.equal({ email: 'dada', orderHistory: [] });
    });

    it('if makeOrde', function () {
        pizza.registerUser('dada');

        expect(pizza.makeAnOrder('dada', 'Italian Style', 'Coca-Cola')).to.equal(0);
    });

    it('', function () {
        pizza.registerUser('dada');
        pizza.makeAnOrder('dada', 'Italian Style', 'Coca-Cola');

        expect(pizza.detailsAboutMyOrder(0)).to.equal('Status of your order: pending');
    });

    it('', function () {
        pizza.registerUser('dada');
        pizza.makeAnOrder('dada', 'Italian Style', 'Coca-Cola');
        pizza.detailsAboutMyOrder(0);

        expect(pizza.doesTheUserExist('dada')).to.deep.equal({ email: 'dada', orderHistory: [{ orderedPizza: 'Italian Style', orderedDrink: 'Coca-Cola' }]});
    });
    it('', function () {
        pizza.registerUser('dada');
        pizza.makeAnOrder('dada', 'Italian Style', 'Coca-Cola');
        pizza.detailsAboutMyOrder(0);
        pizza.doesTheUserExist('dada');

        expect(pizza.completeOrder()).to.deep.equal({
            orderedPizza: 'Italian Style',
            orderedDrink: 'Coca-Cola',
            email: 'dada',
            status: 'completed'
          });
    });
});