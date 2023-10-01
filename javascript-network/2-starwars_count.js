#!/usr/bin/node

const req = require('request');

async function countmovie(APIURL){
    const response = await request.get(APIURL);
    const data = JSON.parse(response.body);

    let count = 0;
    for(const film of data.results){
        if(film.characters.includes('18')){
            count += 1;
        }
    }
    return count;
}

