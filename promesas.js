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

//Para las promesas ya solo recibo el ID es diferente al callback
let getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
      reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id,
      });
    }
  });
};

getEmpleado(3).then(
  (empleado) => {
    getSalario(empleado).then(
      (resp) => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} $`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);
