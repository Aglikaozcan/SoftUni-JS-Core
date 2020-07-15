function coursesPrices(isFund, isAdv, isApp, eduForm) {

    let price = 0;

    if (isFund) {
        price += 170;
    }
    if (isAdv) {
        price += 180;
    }
    if (isApp) {
        price += 190;
    }

    if (isFund && isAdv) {
        price -= 180 * 0.1;
    }
    if (isFund & isAdv & isApp) {
        price -= price * 0.06;
    }
    if (eduForm === 'online') {
        price -= price * 0.06;
    }

    console.log(Math.round(price));
}

coursesPrices(true, false, false, "online");