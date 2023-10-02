#!/usr/bin/node

const request = require('request');


function statUrl(url){
  request(url, (error, response) => {
  if (error){
    console.error('error:', error)
  }else{
    console.log('code:', response.statusCode);
  }
  });
}















async function statUrl(url){
  const response = await fetch(url);
  const statusUse = response.status;
  console.log(`code: ${statusUse}`);
}*/


