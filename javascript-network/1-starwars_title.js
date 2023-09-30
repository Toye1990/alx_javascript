#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.alx-tools.com/api/films/:id`;
request.get(url, function(id, body){
    const body_movie = JSON.parse(body);
    if (body_movie.episode_id == id){
        body_movie.results.forEach(film => {
            console.log(film.title);
        });
    }
    //console.log(body_movie.results);
});