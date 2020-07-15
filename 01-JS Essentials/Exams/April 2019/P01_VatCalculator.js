function solve(priceWithVat, vatRate) {
    let priceWithoutVat = priceWithVat / (1 + vatRate / 100);
    console.log(priceWithoutVat.toFixed(2));
}

solve(120.00,
    20.00
);