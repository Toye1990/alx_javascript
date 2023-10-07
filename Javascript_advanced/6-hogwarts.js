//create a class 

class StudentHogwarts{
    #privateScore = 0;
    #name = null;

#changeScoreBy(points){
    this.#privateScore += points;
}

setName(newName){
this.#name = newName;
}

rewardStudent(){
    this.#changeScoreBy(1);
}

penalizeStudent(){
    this.#changeScoreBy(-1);
}

getScore(){
    return `${this.#name}: ${this.#privateScore}`;
}
}

 
const harry = new StudentHogwarts();
harry.setName('harry');

for(let i = 0; i < 4; i++){
  harry.rewardStudent();
}

console.log(harry.getScore());

const draco = new StudentHogwarts();
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());