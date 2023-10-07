//create a function named createClassRoom

function createClassRoom(number){
  function studentSeat(seat){
    return function(){
        return seat;
    };
  }
  const students = [];
for (let i = 0; i < numbersOfStudents.length; i++) {
    student.push(studentSeat(i+1));
}
return students;
}

