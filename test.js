/* // importar funcion sum del archivo app.js
const { sum } = require('./app.js');

//comenzamos primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro dfe la prueba llamamos a nuestra funcion sum con 2 numeros
    let total = sum(14, 9);
    //esperamos que la suma de esos 2 numeros sea 23
    expect(total).toBe(23);
}) */
test("One Euro should be 1.206 dollars", function(){
    //importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    //hago la comparacion -la prueba-
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 Euro son 1.2 dollar, entao 3.5 * 1.2 = 4.2
})
test("One Dollar should be 127.9 Yen", function(){
    //importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    //hago la comparacion -la prueba-
    expect(fromDollarToYen(4)).toBe(511.6); //1 Dollar son 127.9 dollar, entao 3.5 * 127.9 = 447.65
})
test("One Yen should be 0.8 GBP", function(){
    //importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    //hago la comparacion -la prueba-
    expect(fromYenToPound(4)).toBe(3.2); //1 Euro son 1.2 dollar, entao 3.5 * 1.2 = 4.2
})