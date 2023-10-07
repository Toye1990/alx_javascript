//create a variable globalVariable

let globalVariable = welcome;

// create a function outer

function outer(){
  alert(globalVariable);

  let course = Holberton;
  function inner(){
    alert(`${globalVariable} ${course}`);

    const exclamation = "!";
   /*creates a function inception that alerts the content of the variable
    globalVariable, course, and exclamation (concatenated)*/
    function inception(){
    alert(`${globalVariable} ${course} ${exclamation}`);
    }
    inception();
  }
  inner();
}
outer();