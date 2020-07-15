function trainStation(capacity, passengers) {
    let train = [];
    let currentWagonPassengers = 0;

    for (let i = 0; i < passengers.length; i++) {
        currentWagonPassengers += passengers[i];

        if (currentWagonPassengers <= capacity) {
            train[i] = currentWagonPassengers;
            currentWagonPassengers = 0;
        } else {
            train[i] = capacity;
            currentWagonPassengers -= capacity;            
        }
    }
    console.log(train);

    if (currentWagonPassengers === 0) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${currentWagonPassengers} passengers`);
    }
}

trainStation(10, [9, 39, 1, 0, 0]);