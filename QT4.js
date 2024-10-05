const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {
    const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = (faturamento[estado] / faturamentoTotal) * 100;
    }
    return percentuais;
}