document.addEventListener('DOMContentLoaded', () => {
    // Constantes de configuração
    const CONVERSION_RATES = {
      BRL: 0.0045,  // 1 WON = 0.0045 BRL
      USD: 0.00085, // 1 WON = 0.00085 USD
      EUR: 0.00078  // 1 WON = 0.00078 EUR
    };
  
    // Elementos do DOM
    const elements = {
      form: document.getElementById('conversorForm'),
      amountInput: document.getElementById('valorWons'),
      currencySelect: document.getElementById('moeda'),
      resultDisplay: document.getElementById('resultado')
    };
  
    // Inicialização do aplicativo
    function init() {
      setupEventListeners();
    }
  
    // Configura os event listeners
    function setupEventListeners() {
      elements.form.addEventListener('submit', handleFormSubmit);
    }
  
    // Manipulador do evento de submit do formulário
    function handleFormSubmit(event) {
      event.preventDefault();
      convertCurrency();
    }
  
    // Realiza a conversão de moeda
    function convertCurrency() {
      try {
        const amount = parseFloat(elements.amountInput.value);
        const currency = elements.currencySelect.value;
        
        validateInput(amount);
        
        const convertedAmount = calculateConversion(amount, currency);
        const currencyName = getSelectedCurrencyName();
        
        displayResult(amount, convertedAmount, currencyName);
      } catch (error) {
        displayError(error.message);
      }
    }
  
    // Valida o valor de entrada
    function validateInput(amount) {
      if (isNaN(amount)) {
        throw new Error('Por favor, insira um valor numérico válido.');
      }
      
      if (amount <= 0) {
        throw new Error('O valor deve ser maior que zero.');
      }
    }
  
    // Calcula o valor convertido
    function calculateConversion(amount, currency) {
      const rate = CONVERSION_RATES[currency];
      return (amount * rate).toFixed(2);
    }
  
    // Obtém o nome da moeda selecionada
    function getSelectedCurrencyName() {
      return elements.currencySelect.options[elements.currencySelect.selectedIndex].text;
    }
  
    // Exibe o resultado da conversão
    function displayResult(amount, convertedAmount, currencyName) {
      elements.resultDisplay.innerHTML = `
        <strong>Resultado:</strong> ${formatNumber(amount)} Wons = ${formatNumber(convertedAmount)} ${currencyName}
      `;
      elements.resultDisplay.style.color = 'white';
    }
  
    // Formata números para exibição
    function formatNumber(number) {
      return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number);
    }
  
    // Exibe mensagens de erro
    function displayError(message) {
      elements.resultDisplay.textContent = message;
      elements.resultDisplay.style.color = '#ff6b6b';
    }
  
    // Inicia a aplicação
    init();
  });
