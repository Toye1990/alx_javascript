#!/usr/bin/node

//define the apiURl

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

//character ID for wedge artile title
const characterId = 18;

//make a request to the star war API
request(apiUrl, (error, response, body) =>{
if(!error && response.statusCode === 200){
    //parse the JSON response
    const movies = JSON.parse(body);

    //filter the films where wedge artilles is present
    const filmsfilt = movies.filter(film =>
         film.characters.includes(characterId));
    
   //get the count of the wedge artilles
   countwedgefilm = filmsfilt.length;

   //print result
   console.log(`number of films ${countwedgefilm}`);
}else{
    console.error('error', error);
}
});
