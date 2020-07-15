function carFactory(object) {
    // първо си създаваме независими променливи
    let power;
    let volume;

    // гледаме какви са подадените ни стойности
    if (object.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (object.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    // правим масив от гуми и проверяваме какъв размер са
    let wheels = [];

    for (let i = 0; i < 4; i++) {
        if (object.wheelsize % 2 === 0) {
            wheels.push(object.wheelsize - 1);
        } else {
            wheels.push(object.wheelsize);
        }
    }

    //започваме да създаваме новия обект
    return {
        model: object.model,
        engine: {
            power,
            volume
        },
        carriage: {
            type: object.carriage,
            color: object.color
        },
        wheels
    };
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));