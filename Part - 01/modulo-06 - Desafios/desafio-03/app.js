import j from '../auxiliaryFunctions.js';

const salario = parseFloat(j.gets());
const adicional = parseFloat(j.gets());

function calcularImposto(valorSalario) {
    let aliquota;

    if (valorSalario <= 1100) {
        aliquota = 0.05;
    } else if (valorSalario > 1100 && valorSalario < 2500) {
        aliquota = 0.1;
    } else {
        aliquota = 0.15;
    }

    return aliquota * salario;
}

const imposto = calcularImposto(salario);

const salarioBruto = (salario - imposto + adicional);
j.print(salarioBruto.toFixed(2));