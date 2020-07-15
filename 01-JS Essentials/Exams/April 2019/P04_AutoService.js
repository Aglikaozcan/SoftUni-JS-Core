function autoService(input) {

    let instructions = [];
    let parts = {};

    for (let tokens of input) {

        let [command, model] = tokens.split(' ');

        if (command === 'instructions') {

            if (!instructions.includes(model)) {
                instructions.push(model);
            }

        } else if (command === 'addPart') {

            let part = tokens.split(' ')[2];
            let serialNumber = tokens.split(' ')[3];

            if (!parts[model]) {
                parts[model] = {};
            }
            if (!parts[model][part]) {
                parts[model][part] = [];
            }

            parts[model][part].push(serialNumber);

        } else if (command === 'repair') {

            if (!instructions.includes(model)) {
                console.log(`${model} is not supported`);

            } else {
                let carSpecifications = JSON.parse(tokens.split(' ')[2]);

                for (let part in carSpecifications) {
                    if (carSpecifications[part] === 'broken' && parts[model][part]) {
                        carSpecifications[part] = parts[model][part].shift();
                    }
                }

                console.log(`${model} client - ${JSON.stringify(carSpecifications)}`);
            }
        }
    }  

    for (let model in parts) {    
        console.log(`${model} - ${JSON.stringify(parts[model])}`);        
    }
}

autoService([
    'instructions bmw',
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
]);