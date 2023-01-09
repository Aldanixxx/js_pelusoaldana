//La joya divisas
// Tipos de cambio
const tasaUSD = 1.0;
const tasaEUR = 0.8;
const tasaARG = 354;


const monto = prompt("Ingresá la cantidad de dinero que queres convertir:");
const monedaOrigen = prompt("Ingresá la moneda de origen (USD, EUR, ARG):");
const monedaDestino = prompt("Ingresá la moneda de destino (USD, EUR, ARG):");


let montoConvertido;


if (monedaOrigen.toUpperCase() === "USD" && monedaDestino.toUpperCase() === "EUR") {
    montoConvertido = monto * tasaEUR;
  } else if (monedaOrigen.toUpperCase() === "USD" && monedaDestino.toUpperCase() === "ARG") {
    montoConvertido = monto * tasaARG;
  } else if (monedaOrigen.toUpperCase() === "EUR" && monedaDestino.toUpperCase() === "USD") {
    montoConvertido = monto / tasaEUR;
  } else if (monedaOrigen.toUpperCase() === "EUR" && monedaDestino.toUpperCase() === "ARG") {
    montoConvertido = monto * (tasaARG / tasaEUR);
  } else if (monedaOrigen.toUpperCase() === "ARG" && monedaDestino.toUpperCase() === "USD") {
    montoConvertido = monto / tasaARG;
  } else if (monedaOrigen.toUpperCase() === "ARG" && monedaDestino.toUpperCase() === "EUR") {
    montoConvertido = monto * (tasaEUR / tasaARG);
  } else {
    montoConvertido = monto;
  }
  
// Resultado de la conversion
alert(`${monto} ${monedaOrigen} son ${montoConvertido} ${monedaDestino}`);
