// add addEventListener start===
document.getElementById('deposit-button').addEventListener('click', function(){
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);``
//    console.log(newDepositAmount);
// update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

depositTotal.innerText = newDepositTotal;


// update  balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBlanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBlanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;

// input fild Clear
depositInput.value = '';
});

// withraw balance eventhanderlar
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText);

    // set withdraw total
    const withdrawtotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawtotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawtotal.innerText = newWithdrawTotal;
    // update balance   
    const balanceTotal = document.getElementById('balance-total');
    const previousBlanceText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const newBalanceTotal = previousBlanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw 
    withdrawInput.value = '';
}
 )
