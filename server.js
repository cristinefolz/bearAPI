// create server
var express = require('express');
var app = express();
// express is the framework we are using to create our API (i.e. a routing middleware)
var bodyParser = require('body-parser');

//mounting middleware (functionality added to code as function):
app.use(bodyParser());

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

// :id says that 'id' will be passed in on the fly (do not add the : to the url in postman)
app.get('/api/bear/:id', function(request, response){
	var id = Number(request.params.id);
	// make sure that what you are comparing is of the same 'type' (Number, or string)
	// request.params comes from express; makes it easy to parse out id
    console.log(id);

    // loop through array allbears, look at id value; if value = id, then 
    var foundBear = ''
    allbears.forEach(function(bear){
    	if (bear.id === id) {
    	// could also do if(bear.id.toString === id.toString to compare string type vs number type)	
            foundBear = bear;
    	}
    });
    response.json(foundBear);
});

// servers is running on localhost:300/api/bears;
// console.log just to test that server is working relative to the terminal

//Creating a new Bear as var newBear
// request.body.xxx = the value from the form field (contained in the request.body.) we are getting the info from.
app.post('/api/bear', function(request, response){
	var newBear = {};

	console.log('about to create a new bear');

	newBear.name = request.body.name;
	newBear.id = new Date().getTime();
	newBear.age = request.body.age;
	newBear.gender = request.body.gender;

	console.log('pushing: ', newBear);

	// push the newly created bear into the existing array allbears
	allbears.push(newBear);

	// returns the value of allbears array
	response.json(allbears)
});

app.listen(3000, function(){
	console.log('the server is running');
});

//tst in terminal node server.js - should return 'the server is running'
// created a simple server!

//if using nodeman server.js, it will reset everytime we save to server.js
// if not using nodeman server.js, then will have to stop and restart server (node server.js) between saves for changes to take effect
