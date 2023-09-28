#!/usr/bin/node

//import class rectangle
const Rectangle = require('./4-rectangle.js');

//create class square
class Square extends Rectangle{
 constructor(size){
    super(size, size);
 }
}