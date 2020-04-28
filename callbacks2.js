let empleados = [
  {
    id: 1,
    nombre: "Carlos",
  },
  {
    id: 2,
    nombre: "Melissa",
  },
  {
    id: 3,
    nombre: "Andrés",
  },
];

let salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2550,
  },
];

let getEmpleado = (id, callback) => {
  //Para buscar dentro de un arreglo
  let empleadoDB = empleados.find((empleado) => empleado.id === id);

  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find((salario) => salario.id === empleado.id);

  if (!salarioDB) {
    callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id,
    });
  }
};

getEmpleado(2, (err, empleado) => {
  if (err) {
    return console.log(`Ingreso al error ${err}`);
  }

  getSalario(empleado, (err, resp) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El salario de ${resp.nombre} es de ${resp.salario} y su id es ${resp.id}`
    );
  });
});
