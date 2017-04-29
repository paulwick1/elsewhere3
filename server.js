var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bower = require('bower');
 
var app = express();
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

// app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});