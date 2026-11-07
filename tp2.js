// tp2  procesamiento de Flota y Multas


let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto", km: 150 },
  { patente: "XY987ZW", velocidad: 95, tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto", km: 80 },
  { patente: "QR789JK", velocidad: 88, tipo: "moto", km: 45 },
  { patente: "ST012LM", velocidad: 125, tipo: "auto", km: 200 }
];


// Cada registro se transforma en patente, monto
const reporteMultas = registros.map(v => {
  let monto = 0;
  if (v.velocidad > 130) {
    monto = 10000;
  } else if (v.velocidad > 110) {
    monto = 5000;
  }
  return { patente: v.patente, monto: monto };
});

console.log("Reporte de multas:");
console.log(reporteMultas);


// solo los que van estrictament por encima del limite
const infractores = registros.filter(v => v.velocidad > 110);

console.log(`Cantidad de infractores: ${infractores.length}`);
console.log("Patentes infractoras:", infractores.map(v => v.patente));

// reduce 
// total de km de toda la flota
const totalKm = registros.reduce((acc, v) => acc + v.km, 0);


const recaudacion = reporteMultas.reduce((acc, m) => acc + m.monto, 0);

console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);