document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tipForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const billAmount = parseFloat(document.getElementById('billAmount').value);
        const tipPercent = parseFloat(
            form.elements['tipPercent'].value
        );

        if (isNaN(billAmount) || isNaN(tipPercent) || billAmount < 0) {
            resultDiv.textContent = 'Please enter a valid bill amount and select a tip percentage.';
            return;
        }

        const tip = billAmount * tipPercent;
        const total = billAmount + tip;

        resultDiv.innerHTML = `
            <p>Tip Amount: $${tip.toFixed(2)}</p>
            <p>Total Amount: $${total.toFixed(2)}</p>
        `;
    });
});