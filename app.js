/* //esta es mi funcion que suma dos numeros
const sum = (a, b) => {
    return a + b
}

//solo un registro en consola para nosotros.
console.log(sum(7,3))

//exporta la funcion para usarla en otros archivos
// (similar a la palabra clave `Export` cuando se usa webpack)
module.exports = {sum}; */

let oneEuroIs = {
    "JPY" : 127.9,
    "USD" : 1.2,
    "GBP" : 0.8,
}

// declaramos funcion con mismo nombre "fromEurotoDollar"
const fromEuroToDollar = function(valueInEuro){
    //convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //devolvemos el valor en dolares
    return valueInDollar
}
const fromYenToPound = function(valueInEuro){
    //convertimos el valor a Pound
    let valueInDollar = valueInEuro * oneEuroIs.GBP;
    //devolvemos el valor en dolares
    return valueInDollar
}
const fromDollarToYen = function(valueInEuro){
    //convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.JPY;
    //devolvemos el valor en dolares
    return valueInDollar
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}