// create server
var express = require('express');
var app = express();

// create bear objects
var monte = {name: 'Monte', id: 1, age: 34, gender: 'male'};
var mizzgrizz = {name: 'MizzGrizz', id: 2, age: 28, gender: 'female'};
var benny = {name: 'Benny', id: 3, age: 32, gender: 'male'};
var pooh = {name: 'Pooh', id: 4, age: 45, gender: 'male'}
// add bear objects to array called allbears
var allbears = [monte, mizzgrizz, benny, pooh];

//create api endpoint (.get = api verb, /api/bears = chosen by user)
// Read
// response.json = simple test to return allbears
// '/api/bears' is our request; response is response.jason(allbears)
// returns object allbears array
app.get('/api/bears', function(request, response){
	response.json(allbears);
});

// servers is running on localhost:300/api/bears;
// console.log just to test that server is working relative to the terminal

app.listen(3000, function(){
	console.log('the server is running');
});

//tst in terminal node server.js - should return 'the server is running'
// created a simple server!

//if using nodeman server.js, it will reset everytime we save to server.js
// if not using nodeman server.js, then will have to stop and restart server (node server.js) between saves for changes to take effect
