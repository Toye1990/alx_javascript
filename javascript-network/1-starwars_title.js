#!/usr/bin/node

const request = require('request');

//// Function to get the title of a Star Wars movie by episode number
function printMovie(episodeNumber){

    // // Define the API endpoint URL with the provided movie ID
    const url = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

    //make a request to the API
   request(url, (error, response, body) =>{
    if(!error && statusCode === 200){
        filmData = JSON.parse(body);
        
        //check if the episode number matches
        if (filmData.episode_id === episodeNumber) {
            console.log(`title of movie ${episodeNumber}:${filmData.title}`)
        }else{
            console.log(`no movie found ${episodeNumber}`);
        }
    }else{
        console.error('error:', error);
    }
   })
}
