class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        let classificacao;
        let imc = this.calcularImc();
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
}

const pessoa1 = new Pessoa("John Doe", 70, 1.75);
console.log(pessoa1);
console.log(`Seu IMC: ${pessoa1.calcularImc().toFixed(2)}`);
console.log(pessoa1.classificarImc());

const pessoa2 = new Pessoa("Jane Doe", 60, 1.45);
console.log(pessoa2);
console.log(`Seu IMC: ${pessoa2.calcularImc().toFixed(2)}`);
console.log(pessoa2.classificarImc());