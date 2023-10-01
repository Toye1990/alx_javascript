#!/usr/bin/node
const req = require('request');
const fst = require('fs');

let url ="";

req.get(url, {encoding: utf-8}).pipe(fs.createWriteStream('response.json'));