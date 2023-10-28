//retrieve the selected value from the dropdown menu

const numfieldsValue = document.querySelector('#numFields');
const numfieldsVal = numfieldsvalue.value;

//generate specified number of input text fields dynamically within 'inputContainer'
function generateInputFields(numfieldsVal){
    const inputContainer = document.querySelector('#inputContainer');

    //clear the exising input fields
    inputContainer.innerHTML = '';

    //create a loop to generate the desired number of text input fields
    for (let i = 1; 1 <= numfieldsVal; i++){
    //create a new text input fields
    const newInputfields = document.createElement('input');

    //set the name attribute of the input field
    newInputfields.name = `field${i}`;

    //append the input field to inputContainer 'div'
    inputContainer.appendChild(newInputfields);
    }
}

//generate the initial set of input fields
generateInputFields(numfieldsVal);

//listen for change in the selected dropdown menu selection
numfieldsValue.addEventListener('change', function(){
    //generate the specified number of text input based on the selected value;
    generateInputFields(this.value);
});

//validate form before submitting

function validateForm(){
    //retrieve values entered in dynamically generated text fields
    const inputFields = document.querySelectorAll('#inputContainer input');

    //check if any of the input fields are empty
    for(const inputfield of inputFields){
        if (inputfield === '') {
            //display error message
            alert('Please fill all empty space');
            //prevent the form submission by returning false
            return false;
        }
    }
    //allow form submission by returning true, if all fields are filled;
    return true;
}

//call the validateForm function when the form is submitted
const dynamic = document.querySelector('#dynamicForm');
dynamic.addEventListener('submit', validateForm);