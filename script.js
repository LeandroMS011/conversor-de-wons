function conversor() {
    let valorWons = document.getElementById("valorWons").value;

    // Certifica-se de que o valor digitado é um número válido
    if (isNaN(valorWons) || valorWons.trim() === "") {
        alert("Por favor, digite um valor numérico válido.");
        return;
    }

    valorWons = parseFloat(valorWons);
    
    // Taxas de conversão (exemplo, valores podem variar)
    const taxaWonParaReal = 0.0040;
    const taxaWonParaDolar = 0.00075;
    const taxaWonParaEuro = 0.00068;

    // Obtém a moeda escolhida
    let moedaSelecionada = document.getElementById("moeda").value;
    let resultado;
    let simboloMoeda;

    // Converte de acordo com a moeda selecionada
    switch (moedaSelecionada) {
        case "BRL":
            resultado = valorWons * taxaWonParaReal;
            simboloMoeda = "BRL";
            break;
        case "USD":
            resultado = valorWons * taxaWonParaDolar;
            simboloMoeda = "USD";
            break;
        case "EUR":
            resultado = valorWons * taxaWonParaEuro;
            simboloMoeda = "EUR";
            break;
        default:
            alert("Moeda inválida.");
            return;
    }

    // Formatar o valor no padrão da moeda escolhida
    let resultadoFormatado = resultado.toLocaleString('pt-BR', {
        style: 'currency',
        currency: simboloMoeda
    });

    // Exibir resultado na tela
    document.getElementById("resultado").innerText = `O valor convertido é: ${resultadoFormatado}`;
}
