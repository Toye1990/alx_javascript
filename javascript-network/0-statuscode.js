#!/usr/bin/node

//const request = require('request');


/*function statUrl(url){
  request.get(url, (error, response) => {
  if (error){
    console.error('error:', error)
  }else{
    console.log(`code: ${response.statusCode}`);
  }
  });
}*/

const request = require('request');

function displayStatusCode(url) {
  request.get(url, (error, response) => {
    if (error){
      console.error('Error:', error);
    } else {
      console.log(`Code: ${response.statusCode}`);
    }
  });
}

















