import j from "../auxiliaryFunctions.js";

let maiorPar = 0;
let menorImpar = 1;
const n = j.gets();

for (let index = 0; index < n; index++) {
    let numero = j.gets();
    if (numero % 2 === 0 && numero > maiorPar) {
        maiorPar = numero;
    } else if (numero < menorImpar) {
        menorImpar = numero;
    }
}

j.print(`Maior número par: ${maiorPar}`);
j.print(`Menor número impar: ${menorImpar}`);