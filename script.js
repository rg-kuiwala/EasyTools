// Image Resizer
function resizeImage() {
  const fileInput = document.getElementById('imageInput');
  const canvas = document.getElementById('imageCanvas');
  const ctx = canvas.getContext('2d');

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        canvas.width = 200; // Set desired width
        canvas.height = (img.height / img.width) * 200; // Maintain aspect ratio
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Loan Calculator
function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);
  const loanTerm = parseFloat(document.getElementById('loanTerm').value);

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  document.getElementById('loanResult').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Length Converter
function convertLength() {
  const lengthInput = parseFloat(document.getElementById('lengthInput').value);
  const unit = document.getElementById('lengthUnit').value;
  let result;

  if (unit === 'meters') {
    result = `${lengthInput} meters = ${(lengthInput * 3.28084).toFixed(2)} feet`;
  } else if (unit === 'feet') {
    result = `${lengthInput} feet = ${(lengthInput / 3.28084).toFixed(2)} meters`;
  } else if (unit === 'inches') {
    result = `${lengthInput} inches = ${(lengthInput * 0.0254).toFixed(2)} meters`;
  }

  document.getElementById('lengthResult').innerText = result;
}

// Currency Converter (using static rates for example)
function convertCurrency() {
  const amount = parseFloat(document.getElementById('currencyAmount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  const rates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.73 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.86 },
    GBP: { USD: 1.37, EUR: 1.16, GBP: 1 },
  };

  const convertedAmount = amount * rates[fromCurrency][toCurrency];
  document.getElementById('currencyResult').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
