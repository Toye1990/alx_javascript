#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (error, response, body) =>{
    if (!error && response.statusCode === 200) {
        const todos = JSON.parse(body);

        //create an empty object to store completed task for each user
        const userCompletedTask = {};

       todos.forEach(todo =>{
        if(todo.completed){
            if (userCompletedTask[todo.userId]) {
                userCompletedTask[todo.userId]++;
            }else{
                userCompletedTask[todo.userId] = 1;
            }
        }
       });
       //print result
       for (const userId in userCompletedTask){
        console.log(`user ${userId} completed ${userCompletedTask[userId]} task`)
       }
    }else{
        console.log(error, error);
    }
})
