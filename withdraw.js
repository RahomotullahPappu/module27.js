//step-1:  add event haldler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {

  // step-2: get withdraw amount from the withdraw input field
  // also make sure to convert the input a number by using parseFloat
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);

    // step-7 clear the input field
    withdrawField.value = '';


  if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid number');
    return;
  }

  // step-3 get previous withdraw total
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-4  calculate total withdraw amount
  // set total withdraw amount
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;


  // step-5  get the previous balance total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);



  if(newWithdrawAmount > previousWithdrawTotal){
    alert('This Amount is not availabe in your Account');
    return;
  }

 

  //  step-6 calculate new balance total
  // set the new balance total
  const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;




  
})

