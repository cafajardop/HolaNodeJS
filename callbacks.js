//Se conoce como un callback
setTimeout(function () {
  console.log("Hola Mundo");
}, 3000);

//Si quiero dejaral como funcion de flecha
setTimeout(() => {
  console.log("Hola mundo con funcion de flecha");
}, 3000);

//callback
let getUsuariById = (id, callback) => {
  let usuario = {
    nombre: "Carlos",
    id,
  };

  if (id === 20) {
    callback(`El usuario con el id ${id}, no existe en la BD`); //Encima los errores
  } else {
    callback (null, usuario);//Paso la funcion
  }
};

getUsuariById(1,(err,usuario) => {

    if(err){
        return console.log(err);
    }

  console.log("Usuario de base de datos", usuario);
});
