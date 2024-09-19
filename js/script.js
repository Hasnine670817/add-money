// added money
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


// cash out
document.getElementById('cash-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const typeAmount = document.getElementById('type-amount1').value;
    const typePin = document.getElementById('type-pin1').value;
    const nitAmount = document.getElementById('nit-amount').innerText;

    if (typePin === '1234') {
        const typeAmountNumber = Number(typeAmount);
        const nitAmountNumber = Number(nitAmount);
        const totalBalance = nitAmountNumber - typeAmountNumber;
        console.log(totalBalance);

        document.getElementById('nit-amount').innerText = totalBalance;
    }
    else {
        alert('Incorrect pin..... please enter right pin')
    }
});





const moneyId = document.getElementById('add-money');
const cashId = document.getElementById('cash-out');

const formDiv1 = document.getElementById('form-div1');
const formDiv2 = document.getElementById('form-div2');

cashId.addEventListener('click', function() {

    formDiv1.style.display = 'none'
    formDiv2.style.display = 'block'
});

moneyId.addEventListener('click', function() {

    formDiv1.style.display = 'block'
    formDiv2.style.display = 'none'
});