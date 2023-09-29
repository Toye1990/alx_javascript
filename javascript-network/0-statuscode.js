#!/usr/bin/node

/*const req = require('request');

async function displayNow(url){
  const awat = await req.get(url);
  const status = awat.statusCode;
  console.log(`code: ${status}`);
}*/



const req = require('request');

function displayUrl(url){
    req.request(url)
    .on('response', response => {
        console.log('code: ', response.statusCode);
    })
}