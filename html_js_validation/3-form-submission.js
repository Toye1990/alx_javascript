//create a function handleFormSubmit

function handleFormSubmit(event){
    event.preventDefault();

    //Retrieve the values entered in the form fields.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    //validate form fields
    if (!name || !email) {
        //display error message if any of the fields are empty.
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please fill in all required fields';
        const submitform = document.getElementById('submitForm');
        submitform.appendChild(errorMessage);
    return;
    }

    //display success message if all the field are filled
    const succesMessage = document.createElement('p');
    succesMessage.textContent = 'Form submitted successfully!';
    submitform.appendChild('successMessage');

    //submit form
    submitform.submit();



}