function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function getDollarFormatter(formatter) {
    return function (value) {
        return formatter('.', '$', true, value);
    };
}

function getEuroFormatter(formatter) {
    return function (value) {
        return formatter(',', '#', true, value);
    };
}

const dollarFormatter = getDollarFormatter(currencyFormatter);
const euroFormatter = getEuroFormatter(currencyFormatter);
console.log(dollarFormatter(100));
console.log(euroFormatter(100));

