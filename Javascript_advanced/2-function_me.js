//create a function named welcomeMessage

function welcomeMessage(fullName){

    //create a closure for an alert displaying Welcome <fullName>
    return function(){
    alert(`welcome ${fullName}`);
    };
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');