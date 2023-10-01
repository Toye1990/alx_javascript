#!/usr/bin/node
const req = require('request');
const fst = require('fs');

req.get(url, {encoding: utf-8}).pipe(fs.createWriteStream('response.json'));