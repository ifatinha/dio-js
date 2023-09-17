class Carro {

    marca;
    cor;
    consumoMedioPorKm;

    constructor(marca, cor, consumoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    calculcarGastosDePercurso(precoCombustivel, qtdKm) {
        return ((precoCombustivel * this.consumoMedioPorKm) * qtdKm);
    }
}

const precoGasolina = 5.86;
const precoAlcool = 3.77;

const golf = new Carro("Golf Comfortline 1.0 TSi", "Cinza", (1 / 8.5));

console.log(golf);
console.log(`${golf.calculcarGastosDePercurso(precoGasolina, 750).toFixed(2)} R$`);

const ferrari = new Carro("Ferrari 296 gtb", "Red", (1 / 6.2));
console.log(ferrari);
console.log(`${ferrari.calculcarGastosDePercurso(precoGasolina, 750).toFixed(2)} R$`);
