
function validateEmail(email){
    //create regular expression to match the email format
  const regEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  if (regEX.test(email)) {
    return true;
  }
  else{
    return false;
  }
}

//retrieve the value entered in the input field 

const emailPut = document.querySelector('#email');
const email = emailPut.value;

if (!validateEmail(email)) {
    const errorMessage = document.getElementById('#error');
    errorMessage.innerText = 'Please enter a valid email address.';

    //Prevent the default form submission
  event.preventDefault();
}
