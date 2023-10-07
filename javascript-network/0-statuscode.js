#!/usr/bin/node
const process = require('process');
const request = require('request');
const url = process.argv[2];

function responUrl(url){
  request.get(url, (error, response) => {
  if (error){
    console.error('error:', error);
  }else{
    console.log(`code: ${response.statusCode}`);
  }
  });
}

responUrl();
