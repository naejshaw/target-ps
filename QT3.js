const faturamentoMensal = [1000, 1500, 0, 2000]

function analisarFaturamento(faturamento) {
    const valoresValidos = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    const mediaMensal = valoresValidos.reduce((acc, valor) => acc + valor, 0) / valoresValidos.length;
    const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, mediaMensal, diasAcimaDaMedia };
}