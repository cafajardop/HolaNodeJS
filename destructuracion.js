let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getnombre: function () {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  },
};
//Llamando la funcion
console.log(deadpool.getnombre());
//Destructuracion 
let {nombre, apellido,poder} = deadpool;
console.log(`Su nombre es: ${nombre}, con destructuracion:  ${apellido}, - ${poder}`);
//Si quiero asignarle un alias lo hago con dos punto y le asigno un alias
let {nombre: primerNombre} = deadpool;
console.log(`Con alias y dos puntos ${ primerNombre }`);