function calcularPorcentagem(valor) {
    return valor / 100;
}

function aplicarDesconto(precoEtiqueta, valor) {
    return precoEtiqueta - (precoEtiqueta * calcularPorcentagem(valor));
}

function aplicarJuros(precoEtiqueta, valor) {
    return precoEtiqueta + (precoEtiqueta * calcularPorcentagem(valor));
}

function mostrarFormaPagamento(tipoPagamento) {
    let formaPagamento;

    if (tipoPagamento === 1) {
        formaPagamento = "Débito À Vista";
    } else if (tipoPagamento === 2) {
        formaPagamento = "Pagamento ou PIX";
    } else if (tipoPagamento === 3) {
        formaPagamento = "Parcelado em 2x";
    } else if (tipoPagamento === 4) {
        formaPagamento = "Parcelado em mais 3x";
    }

    return formaPagamento;
}

function calcularNovoPreco(tipoPagamento, precoEtiqueta) {
    let precoPagar;

    if (tipoPagamento === 1) {
        precoPagar = aplicarDesconto(precoEtiqueta, 10);
    } else if (tipoPagamento === 2) {
        precoPagar = aplicarDesconto(precoEtiqueta, 15);
    } else if (tipoPagamento === 3) {
        precoPagar = precoEtiqueta;
    } else if (tipoPagamento === 4) {
        precoPagar = aplicarJuros(precoEtiqueta, 10);
    }

    return precoPagar;
}

(function () {
    const precoEtiqueta = 5.80;
    const tipoPagamento = 4; //Débito, Dinheiro ou PIX, Parcelado 2x, Parcelado +2x

    console.log(`Forma de pagamento: ${mostrarFormaPagamento(tipoPagamento)}`);
    console.log(`Valor a pagar: ${calcularNovoPreco(tipoPagamento, precoEtiqueta)}R$`);
})();