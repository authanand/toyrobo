#!/usr/bin/env node

var fs = require('fs');
ToyRobo = require('./src/robo.js');
chalk = require('chalk');
byline = require('byline');

let inputArray = [];

function bootsrap(){
  var file;
  var robo = new ToyRobo();
if(process.argv.length == 2) file=process.argv[2];
else file = fs.createReadStream(process.argv[2]);

file.on('error', function(error) { console.log("Can't open file.");});
var stream = byline(fs.createReadStream(process.argv[2], { encoding: 'utf8' }));

  stream.on('data', function(line) {
    inputArray.push(line);
  });

  stream.on('end', function(line) {
    robo.loadData(inputArray);
  });
  
}

bootsrap();




