function concrete(budget, neededConcrete, discount) {

    let totalPrice = 0;

    let prices = {
        gravel: 0.50,
        sand: 0.20,
        cement: 1.10
    };

    let per100 = {
        gravel: 240 / 2,
        sand: 150 / 2,
        cement: 60 / 2
    };

    let gravelKg = (per100.gravel * neededConcrete * 10) * prices.gravel;
    let sandKg = (per100.sand * neededConcrete * 10) * prices.sand;
    let cementKg = (per100.cement * neededConcrete * 10) * prices.cement;

    totalPrice = gravelKg + sandKg + cementKg;

    let output = '';

    let priceWithDiscount = totalPrice - totalPrice * discount / 100;

    if (budget > 0 && neededConcrete > 0 && discount > 0) {
        if (totalPrice > budget) {
            output = `You can't buy all these things! You need ${(totalPrice - budget).toFixed(2)} BGN more`;

            if (totalPrice >= 1000) {
                output = `You can't buy all these things! You need ${(priceWithDiscount - budget).toFixed(2)} BGN more`;
            }

        } else {
            output = `The price without discount is ${totalPrice.toFixed(2)} BGN\nGravel: ${gravelKg.toFixed(2)} BGN\nSand: ${sandKg.toFixed(2)} BGN\nCement: ${cementKg.toFixed(2)} BGN`;

            if (totalPrice >= 1000) {
                output += `\nThe price with discount is ${priceWithDiscount.toFixed(2)} BGN`;
            }
        }

        console.log(output);
    }
}

concrete(1500, 0.95, 3);