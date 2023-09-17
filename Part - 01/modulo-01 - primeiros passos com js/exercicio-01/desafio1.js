const precoEtanol = 2.45;
const precoGasolina = 5.86;
const tipoCombustivel = "Etanol";
const kmPorLitro = 12;
const distanciaKm = 100;
let gastoTotal;

if (tipoCombustivel === "Gasolina") {
    gastoTotal = (precoGasolina / kmPorLitro) * distanciaKm;
    console.log(`Gasto de gasolina: ${gastoTotal.toFixed(2)}R$`);
} else if (tipoCombustivel === "Etanol") {
    gastoTotal = (precoEtanol / kmPorLitro) * distanciaKm;
    console.log(`Gasto de Etanol: ${gastoTotal.toFixed(2)}R$`);
} else {
    console.log("Tipo de combustivel inválido!");
}



