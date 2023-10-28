const password = document.querySelector('#password');
const form = document.querySelector('#passwordForm');

const validatePassword = () =>{
    let valid = false;
    passwordUser = password.value.trim();

    if (!isRequired) {
        showUSer(password, 'enter correct password');
    }else if (isPasswordSecure) {
        showUSer(password, 'enter at least uppercase, lowercase, number and one character')
    }else{
        showSuccess = password;
        valid = true;
    }
 return valid;
}

const isPasswordSecure = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.!8)");
    return re.test(password);
}

const showError = (input, message) =>{
  const formField = input.parentElement;

  const formError = document.querySelector('#error');
  formError.textContent = message;

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formValid = validatePassword();
})



