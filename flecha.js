//Sin funcion de flecha
function sumar(a,b){
    return a +b;
}
console.log(sumar(40,20));

//Con funcion de flecha
let sumarFlecha = (a, b) => {
    return a + b;
}
console.log(sumarFlecha(70,80));

//Funcion flecha mas abreviado se da por implicito el return
let flechaAbreviado = (a,b) => a + b;
console.log(flechaAbreviado(1,3));

//Ejercicio 
let saludar = () => 'holaMundo';
console.log(`Ejercicio con ${saludar()}`);

//pasando un argumento
let saludar2 = nombre => `'Hola ${nombre}'`
console.log(saludar2('Carlos'));
