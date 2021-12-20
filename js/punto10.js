const mi = parseFloat (prompt("Ingrese las millas que deseas convertir"));
const km = 1.609344; /*cantidad de kilometros que hay en 1 milla*/

let mitokm = mi * km;

alert(`En ${mi} Millas hay ${mitokm} Kilometros`);
