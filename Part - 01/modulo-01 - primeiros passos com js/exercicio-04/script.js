const precoEtiqueta = 5.80;
const tipoPagamento = 3; //Débito, Dinheiro ou PIX, Parcelado 2x, Parcelado +2x
let formaPagamento;
let desconto;
let precoPagar;

if (tipoPagamento === 1) {
    desconto = precoEtiqueta * 0.1;
    precoPagar = precoEtiqueta - desconto;
    formaPagamento = "Débito";
} else if (tipoPagamento === 2) {
    desconto = precoEtiqueta * 0.15;
    precoPagar = precoEtiqueta - desconto;
    formaPagamento = "Pagamento ou PIX";
} else if (tipoPagamento === 3) {
    precoPagar = precoEtiqueta;
    formaPagamento = "Parcelado em 2x";
} else if (tipoPagamento === 4) {
    let juro = precoEtiqueta * 0.1;
    precoPagar = precoEtiqueta + juro;
    formaPagamento = "Parcelado em mais 3x";
}

console.log(`Preço de Etiqueta: ${precoEtiqueta.toFixed(2)}R$`);
console.log(`Forma de pagamento: ${formaPagamento}`);
console.log(`Preço Final: ${precoPagar.toFixed(2)}R$`);