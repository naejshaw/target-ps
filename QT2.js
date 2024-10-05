function pertenceFibonacci(numero) {
    let a = 0, b = 1, c;
    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }
    return c === numero;
}

// Exemplo de uso:
const numeroInformado = 21;
if (pertenceFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");

}