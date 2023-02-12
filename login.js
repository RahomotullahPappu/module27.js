

document.getElementById('btn-submit').addEventListener('click', function(){
  // step 2: get the email address inside the email input field
  // alwase rememver to use value to get text form an input field

  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  // step 3: get password
  // 3.a: set id on the html element
  // 3.b: get the element
  // 3.c: get the value form the element

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  // ganger : do not varify email password on the client side
  // step 4: verify email and password and checked weather valid user or not

  if(email === 'pappu@gmail.com' && password === 'arinpappu'){
    window.location.href = 'bank.html';
  }
  else{
    alert('ivalid password!! Please valid Password')
  }
})