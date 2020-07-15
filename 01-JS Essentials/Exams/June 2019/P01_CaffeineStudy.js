function caffeineStudy(days) {

    let beverages = {
        'coffee': 0.4,
        'tea': 0.2,
        'cola': 0.08,
        'energyDrink': 0.3
    };

    let consumedCaffeine = 0;

    for (let i = 1; i <= days; i++) {

        consumedCaffeine += (3 * 150 * beverages.coffee) 
        + (2 * 250 * beverages.cola)
        + (3 * 350 * beverages.tea);

        if (i % 5 === 0) {
            consumedCaffeine += 3 * 500 * beverages.energyDrink;
        }

        if ( i % 9 === 0) {
            consumedCaffeine += (4 * 250 * beverages.cola) + (2 * 500 * beverages.energyDrink);
        }
    }

    console.log(`${consumedCaffeine} milligrams of caffeine were consumed`);
}

caffeineStudy(8);