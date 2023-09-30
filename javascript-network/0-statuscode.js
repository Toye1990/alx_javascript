#!/usr/bin/node

const request = require('request');

const url = "";

request.get(url, function(response){
  console.log('code:', response.statusCode)
})

/*const req = require('request');

async function displayNow(url){
  const awat = await req.get(url);
  const status = awat.statusCode;
  console.log(`code: ${status}`);
}*/



/*const req = require('request');

function displayUrl(url){
    req.request(url)
    .on('response', response => {
        console.log('code: ', response.statusCode);
    })
}*/