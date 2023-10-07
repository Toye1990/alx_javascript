//create a function named welcome

function welcome(firstName, lastName){
    //create a variable named fullname 
  const fullName = `${firstName} ${lastName}`;

  function displayFullName(){
    alert(`welcome, ${fullName} !`)
  }
  displayFullName();
}

welcome('Holberton', 'School');
alert(fullName);

