function coffeeStorage() {

    let textarea = JSON.parse(document.querySelector('textarea').value);
    let [report, inspection] = document.getElementsByTagName('p');

    //правим си един обект, в който да съхраняваме информацията
    let storage = {};

    //обхождаме инпута ред по ред
    for (let tokens of textarea) {
        //console.log(tokens);
        let [command, brand, name, expireDate, quantity] = tokens.split(', ');
        //console.log(brand);

        if (command === 'IN') {
            if (!storage[brand]) {
                storage[brand] = {};
            }
            if (!storage[brand][name]) { //ако го няма, го създаваме, със съответните стойности
                storage[brand][name] = { expireDate, quantity: Number(quantity) };
                //датата е стринг, но количеството трябва да се зададе като число
            }
            if (storage[brand][name].expireDate === expireDate) { //ако датата е същата, трябва да добавим количеството
                storage[brand][name] += { expireDate, quantity: Number(quantity) };
            }
            if (storage[brand][name].expireDate < expireDate) { //презаписваме нови стойности
                storage[brand][name] = { expireDate, quantity: Number(quantity) };
            }
        } else if (command === 'OUT') {
            if (storage[brand] &&
                storage[brand][name] &&
                storage[brand][name].expireDate > expireDate &&
                storage[brand][name].quantity >= Number(quantity)) {

                storage[brand][name].quantity -= Number(quantity);
            }
        } else if (command === 'REPORT') {
            //console.log(Object.entries(brands));

            Object.entries(storage)
                .forEach(([brand, name]) => {
                    let result = [];

                    //console.log(Object.entries(name));
                    Object.entries(name)
                        .map(([name, information]) => {
                            result.push(`${name} - ${information.expireDate} - ${information.quantity}.`);
                        });
                    //console.log(arr);

                    report.innerHTML += `${brand}: ${result.join(' ')}` + `<br/>`;
                });
        } else if (command === 'INSPECTION') {
            Object.entries(storage)
                .sort((a, b) => a[0].localeCompare(b[0])) //sorted alphabetically
                .forEach(([brand, name]) => {
                    let arr = [];

                    Object.entries(name)
                        .sort((a, b) => b[1].quantity - a[1].quantity) //sorted by quantity in descending order
                        .forEach(([name, information]) => {
                            arr.push(`${name} - ${information.expireDate} - ${information.quantity}.`);
                        });
                    inspection.innerHTML += `${brand}: ${arr.join(' ')}` + `<br/>`;
                });
        }
    }
}