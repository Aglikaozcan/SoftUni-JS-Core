function solution() {
    let storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    let recipes = [
        { name: 'apple', ingredients: { carbohydrate: 1, flavour: 2 } },
        { name: 'lemonade', ingredients: { carbohydrate: 10, flavour: 20 } },
        { name: 'burger', ingredients: { carbohydrate: 5, fat: 7, flavour: 3 } },
        { name: 'eggs', ingredients: { protein: 5, fat: 1, flavours: 1 } },
        { name: 'turkey', ingredients: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 } }
    ];

    function restock(ingredient, quantity) {
        storage[ingredient] += +quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let neededRecipe = recipes.find(r => r.name === recipe);
        let neededIngredients = neededRecipe.ingredients;

        for (let ingredient in neededIngredients) {
            if (storage[ingredient] < neededIngredients[ingredient] * quantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let ingredient in neededIngredients) {
            storage[ingredient] -= neededIngredients[ingredient] * quantity;
        }
        return 'Success';
    }

    function report() {
        let string = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        return string;
    }

    function readingInput(input) {
        let [command, item, quantity] = input.split(' ');

        if (command === 'restock') {
            return restock(item, quantity);
        } else if (command === 'prepare') {
            return prepare(item, quantity);
        } else {
            return report();
        }
    }

    return readingInput;
}

let manager = solution();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));