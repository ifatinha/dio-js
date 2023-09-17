function calcularImc(peso, altura) {
    return (peso / (altura * altura));
}

function analisarImc(imc) {
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso!";
    } else if (imc >= 18.5 && imc <= 25) {
        classificacao = "Peso normal!";
    } else if (imc > 25 && imc <= 30) {
        classificacao = "Acima do Peso!";
    } else if (imc > 30 && imc < 40) {
        classificacao = "Obesidade Grau I!";
    } else {
        classificacao = "Obesidade Grau II!";
    }

    return classificacao;
}

(function () {
    const imc = calcularImc(90, 1.69);
    console.log(`Seu IMC: ${imc.toFixed(2)}`);
    console.log(analisarImc(imc));
})();