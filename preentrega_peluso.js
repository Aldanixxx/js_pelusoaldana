//La joya divisas
// Tipos de cambio

/*const convertirDivisas = (tasaUSD = 1.0, tasaEUR = 0.93, tasaARG = 180.15) => {
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
 
    const verCotizaciones = prompt("¿Querés ver las cotizaciones del día? (si o no)");

    if (verCotizaciones.toLowerCase() === "si") {
        alert("Cotización del día: USD: " + tasaUSD + ", EUR: " + tasaEUR + ", ARG: " + tasaARG);
    }
  }
  
  let continuar = true;
  
  do {
      convertirDivisas();
      continuar = confirm("¿Querés realizar otra conversión?");
    } while (continuar);
  

console.log(convertirDivisas); 
*/



class convertirDivisas {
  constructor(tasas) {
    this.tasas = tasas;
  }

  convertir(cantidad, desde, hasta) {
    let tasaDesde = this.tasas[desde];
    let tasaHasta = this.tasas[hasta];
    if (!tasaDesde || !tasaHasta) {
      console.log ("Moneda inválida");
      return;
    }
    let nuevaTasaDesde = prompt(`Ingrese tasa de cambio para ${desde} (si no desea ingresar una tasa utilice la tasa existente ${tasaDesde})`);
    if (nuevaTasaDesde) {
      tasaDesde = parseFloat(nuevaTasaDesde);
    }
    let nuevaTasaHasta = prompt(`Ingrese tasa de cambio para ${hasta} (si no desea ingresar una tasa utilice la tasa existente ${tasaHasta})`);
    if (nuevaTasaHasta) {
      tasaHasta = parseFloat(nuevaTasaHasta);
    }
    let cantidadConvertida = cantidad * tasaHasta / tasaDesde;
    let resultado = `${cantidad} ${desde} vale ${cantidadConvertida} ${hasta}.`;
    console.log(resultado);
    alert(resultado);
    return cantidadConvertida;

  }

  agregarMoneda(moneda, tasa) {
    this.tasas[moneda] = tasa;
  }

  actualizarTasa(moneda, tasa) {
    if (!this.tasas[moneda]) {
      console.log("Moneda inválida");
      return;
    }

    this.tasas[moneda] = tasa;
  }

  eliminarMoneda(moneda) {
    if (!this.tasas[moneda]) {
      console.log("Moneda inválida");
      return;
    }

    delete this.tasas[moneda];
  }
}

let tasas = {
  USD: 1,
  EUR: 0.87,
  ARS: 100
};

let convertidor = new convertirDivisas(tasas);

while (true) {
  var desde = prompt("¿Qué moneda deseas convertir? (USD/EUR/ARS)");
  var hasta = prompt("¿A qué moneda deseas convertir? (USD/EUR/ARS)");
  var cantidad = parseInt(prompt("¿Cuánto deseas convertir?"));
  if (desde === "salir") {
    break;

  convertidor.convertir(cantidad, desde, hasta);
  var otra = prompt("¿Deseas hacer otra conversión? (si/no)")
  if (otra === "no") {
    break;
  }
}
const verCotizaciones = prompt("¿Querés ver las cotizaciones del día? (si o no)");

    if (verCotizaciones.toLowerCase() === "si") {
        console.log("Cotización del día: " + convertidor.verTasas())
    }

console.log("Monedas filtradas (USD, EUR): " + Object.keys(convertidor.tasas).filter(moneda => ["USD", "EUR"].includes(moneda)));