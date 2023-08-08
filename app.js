// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (a) => {
    return a * oneEuroIs.USD
}
const fromDollarToYen = (a) => {
    return (a / oneEuroIs.USD) * oneEuroIs.JPY
}
const fromYenToPound = (a) => {
    return (a / oneEuroIs.JPY) * oneEuroIs.GBP
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


