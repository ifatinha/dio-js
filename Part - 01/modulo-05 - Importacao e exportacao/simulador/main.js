import f from "./auxiliaryFunctions.js";

let maior = f.entradas[0];

for (let i = 1; i < f.entradas.length; i++) {
    if (maior < f.entradas[i]) {
        maior = f.entradas[i];
    }
}

f.print(maior);