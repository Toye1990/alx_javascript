#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const utf8 = require('utf8');

// define the url and filepaths as command line argument

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath){
    console.log('please a URl and path');
    process.exit(1);
}

//make an http request to the specified URL
request(url, (error, body, response) =>{
    if(error){
        console.log('error', error)
    }else if(response.statusCode !== 200){
     console.log('http request failed', response.statusCode);
    }else{
        //save the response body to file with utf-8 encoding
        fs.writeFile(filePath, utf8.encode(body), 'utf8', (writeError){
            if(writeError){
                console.log('write to the file', writeError);
            }else{
                console.log('webpage consent', filePath);
            }
        });
    }
});


