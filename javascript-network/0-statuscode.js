#!/usr/bin/node

const request = require('request');


function responUrl(url){
  request.get(url, (error, response) => {
  if (error){
    console.error('error:', error);
  }else{
    console.log(`code: ${response.statusCode}`);
  }
  });
}
