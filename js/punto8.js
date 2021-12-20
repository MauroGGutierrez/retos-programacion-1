const total = prompt("Ingrese el total a pagar", "");
const personas = prompt("Entre cuantas personas dividiras la cuenta?", "");
const propina = prompt(
  "Ingrese el porcentaje de propinas que quieres pagar:",
  ""
);
const impuesto = prompt("Ingrese el porcentaje de impuestos: ", "");

let ValorImpuestos = (Number(total) * Number(impuesto)) / Number(100);
let ValorPropina = (Number(total) * Number(propina)) / Number(100);
let ValorTotal = Number(ValorImpuestos) + Number(ValorPropina) + Number(total);
let CadaUno = Number(ValorTotal) / Number(personas);
alert(
  `Tienen que pagar en total: $${ValorTotal}, Son : ${personas} personas, Entonces cada uno debe poner $${CadaUno}`
);
