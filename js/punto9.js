const dias = parseInt(prompt('ingrese la cantidad de dias: '));
const horas = dias * 24;
const minutos = horas * 60;
const segundos = minutos * 60;
alert(
  `En ${dias} dias hay : ${horas} horas, ${minutos} minutos y ${segundos} segundos en total`
);
