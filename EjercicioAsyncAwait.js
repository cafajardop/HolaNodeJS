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

//Transformando callback en una promesa con await
let getEmpleado = async (id) => {
  let empleadoDB = empleados.find((empleado) => empleado.id === id);

  if (!empleadoDB) {
    throw new Error(`No existe un empleado con el ID ${id}`);
  } else {
    return empleadoDB;
  }
};

let getSalario = async (empleado) => {
  
  let salarioDB = salarios.find((salario) => salario.id === empleado.id);

  if (!salarioDB) {
    throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`);
  } 
  else {
    return{
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    };
  }
}

//La unica condicion para hacer funcionar el await es que debe estar en un async

let getInformacion = async (id) => 
{
  let empleado = await getEmpleado(id);
  let resp = await getSalario(empleado);

  return `${resp.nombre} tiene un salario de ${resp.salario} $`;
};

getInformacion(2)
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.log(err));
