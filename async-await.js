/**
 * Async Await
 */
//EL async transforma automaticamente en una promesa
let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Andrés");
    }, 5000);
  });
};

let saludo = async () => {
  let nombre = await getNombre();
  return `Hola async ${nombre}`;
};

saludo().then((mensaje) => {
  console.log(mensaje);
});
