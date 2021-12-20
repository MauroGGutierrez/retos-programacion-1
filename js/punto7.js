const nombre = prompt("Ingrese su nombre", "");
const edad = prompt("Ingrese su edad actual", "");

const edadpasada = Number(edad) - Number(1);
const edadfutura = Number(edad) + Number(1);
alert(
  `${nombre} el año pasado tenias ${edadpasada} y el proximo año cumpliras ${edadfutura}`
);
