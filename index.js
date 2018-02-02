var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

var users = [
	{
		id: 1,
		first_name: 'Foo',
		last_name:  'bar',
		email: 'bar@gmail.com',
	},

	{
		id: 2,
		first_name: 'Baz',
		last_name:  'bar',
		email: 'baz@gmail.com',
	},

	{
		first_name: 'Bar',
		last_name:  'foo',
		email: 'foo@gmail.com',
	},

	]

app.get('/', function(req, res){
	var title = 'Customers';
	res.render('index', {
		title: 'Customers',
		users: users
	});
});


app.listen(3000, function(){
	console.log('Server started on port 3000...');
})

