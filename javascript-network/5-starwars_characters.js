#!/usr/bin/node
const request = require('request');

//create function to get characters from movie

function moveCharacters(movieId){
 const url = `https://swapi.dev/api/films/${movieId}/`;

 request(url, (error, response, body => {

    if (!error && response.statusCode === 200)
    {
     const moviefilm = JSON.parse(body);
     console.log(`characters in ${moviefilm.title}`);

    moviefilm.characters.forEach((characterURl) => {
        request(characterURl, (error, response, body) => {
            if (!error && response.statusCode === 200){
                const char = JSON.parse(body);
                console.log(char.name);
            }else{
                console.error(`failed to fetch: ${error}`);
            }
        });
    } );

    }else{
        console.error(`failed to fetch: ${error}`);
    }
 }));

}