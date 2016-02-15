var express = require('express');
var app = express();

// .get = api verb, /api/bears = chosen by user
app.get('/api/bears', function(request, response){
	response.json({title: 'does it work?', body: 'I hope so...'})
});

app.listen(3000, function(){
	console.log('the server is running');
});