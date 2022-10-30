document.getElementById('withdraw-button').addEventListener('click', function() {

    // step-2
    const withdRawField = document.getElementById('withdraw-input');
    const newWithdrawString = withdRawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);


    // step-7

    withdRawField.value = ' ';


    if (isNaN(newWithdrawAmount)) {
        alert('please enter a number');
    }


    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);



    // step-5
    const totalBalanceElement = document.getElementById('currentBalance-total');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceElementString);





    if (newWithdrawAmount > totalBalance) {
        alert('not enough money in your account');
        return;
    }


    // step-4
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    // step-6
    const newBalance = totalBalance - currentWithdrawTotal;
    totalBalanceElement.innerText = newBalance;


















})