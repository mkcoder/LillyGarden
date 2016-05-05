var express = require('express');
//var stylus = require('stylus');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}



app.set('views', __dirname + '/server/views/');
app.set('view engine', 'jade');
console.log(__dirname+'/public');
app.use(express.static(__dirname+'/public'));

//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(stylus.middleware({
	//src: __dirname + '/public',
	//compile: compile
//}));


app.get('/garden/:gardenPattern', function (req, res) {
	res.render('app/'+req.params.gardenPattern);
});

app.get('*', function (req, res) {
	res.render('index');
});

var port = 3030;
app.listen(port);
console.log("Listening on port: " + port);