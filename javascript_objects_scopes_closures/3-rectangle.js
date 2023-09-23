#!/usr/bin/node

//create a class rectangle

class Rectangle{
    constructor(w, h){
        if(w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)){
            this.width = 0;
            this.height = 0;
        }else{
            this.width = w;
            this.height = h;
        }
    }
    print(){
        for(let i =0; i < this.width.length; i++){
            console.log('X'.repeat(this.width));
        }
    }
}