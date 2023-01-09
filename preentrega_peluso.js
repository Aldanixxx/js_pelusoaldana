//La joya divisas
// Tipos de cambio
function convertirDivisas(tasaUSD = 1.0, tasaEUR = 0.93, tasaARG = 180.15) {

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
    montoConvertido = (monto / tasaEUR) * tasaARG;
  } else if (monedaOrigen.toUpperCase() === "ARG" && monedaDestino.toUpperCase() === "USD") {
    montoConvertido = monto / tasaARG;
  } else if (monedaOrigen.toUpperCase() === "ARG" && monedaDestino.toUpperCase() === "EUR") {
    montoConvertido = (monto / tasaARG) * tasaEUR;
  } else {
    montoConvertido = monto;
  }
  
// Resultado de la conversion
alert(monto + " " + monedaOrigen + " son " + montoConvertido + " " + monedaDestino);
}
let continuar = true;

do {
    convertirDivisas();
    continuar = confirm("¿Querés realizar otra conversión?");
  } while (continuar);