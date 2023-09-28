#!/usr/bin/node

//import class square
const Square = require('./5-rectangle.js').Square;

//create class square
class Square extends Square{
 charPrint(c){
    if(c === undefined){
        c = "X"
    }
    for(let i = 0; i < this.height; i++){
        console.log('c'.repeat(this.width));
    }
 }
}
