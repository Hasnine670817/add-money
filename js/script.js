
document.getElementById('add-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const typeAmount = document.getElementById('type-amount').value;
    const typePin = document.getElementById('type-pin').value;
    const nitAmount = document.getElementById('nit-amount').innerText;

    if (typePin === '1234') {
        const typeAmountNumber = Number(typeAmount);
        const nitAmountNumber = Number(nitAmount);
        const newBalance = nitAmountNumber + typeAmountNumber;
        console.log(newBalance);

        document.getElementById('nit-amount').innerText = newBalance;
    }
    else {
        alert('Incorrect pin..... please enter right pin')
    }
});