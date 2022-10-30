document.getElementById('deposit-button').addEventListener('click', function() {

    const depositField = document.getElementById('input-deposit');

    const newDeposit = depositField.value;
    const newDepositAmount = parseFloat(newDeposit);


    depositField.value = ' ';

    if (isNaN(newDepositAmount)) {
        alert('please enter a number');
        return;
    }



    const depositTotalElement = document.getElementById('deposit-total');
    const previousDeposit = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDeposit);

    const depositTotal = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = depositTotal;


    //add balace 

    const balance = document.getElementById('currentBalance-total');
    const previousBalancestring = balance.innerText;
    const previousBalance = parseFloat(previousBalancestring);

    const previousBalanceTotal = previousBalance + depositTotal;


    const currentBalance = previousBalanceTotal + depositTotal;

    balance.innerText = currentBalance;













})