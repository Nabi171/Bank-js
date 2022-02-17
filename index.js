// get the amount deposited 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newdepositText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositText);

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const PreviousDepositText = depositTotal.innerText;
    const PreviousDepositAmount = parseFloat(PreviousDepositText);
    const newDepositTotal = PreviousDepositAmount + newdepositAmount
    depositTotal.innerText = newDepositTotal;


    // update balance 
    const balaceTotal = document.getElementById('balance-total');
    const balanceTotalText = balaceTotal.innerText;
    const previousBalacetotl = parseFloat(balanceTotalText);
    // console.log(previousBalacetotl);
    const newBalaceTotal = previousBalacetotl + newdepositAmount;
    balaceTotal.innerText = newBalaceTotal;

    // clr the depositinput Field 

    depositInput.value = ''

})


// handle withdrawEventHandeler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // set withdrawtotal 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clr wiothdaraw input 
    withdrawInput.value = '';

    // update balancetotal 
    const balancetotal = document.getElementById('balance-total');
    const previousBalacetotltext = balancetotal.innerText;
    const previousBalacetotl = parseFloat(previousBalacetotltext);
    const newbalaceTotal = previousBalacetotl - newWithdrawAmount;
    balancetotal.innerText = newbalaceTotal;

})

