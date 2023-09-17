let nota1 = 3.5;
let nota2 = 1.5;
let nota3 = 5.5;

let media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua Média: ${media.toFixed(2)}`);

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}