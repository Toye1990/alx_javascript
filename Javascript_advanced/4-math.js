//create a function divideBy

function divideBy(firstNumber){
   return function(secondNumber){
     return firstNumber / secondNumber;
   }
}

function addBy(firstNumber){
 return function(secondNumber){
   return firstNumber + secondNumber;
 }
}

const addby100 = addby(null, 100);
const addby1000 = addby(null, 1000);
const divideby10 = divideby(null, 10);
const divideby100 = divideby(null, 100);
