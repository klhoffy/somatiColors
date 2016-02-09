var express 		= require('express');
var app			    = express();
var mongoose		= require('mongoose');
var logger 			= require('morgan');
var bodyParser 	    = require('body-parser');
var path		   	= require('path');
var cors            = require('cors');
var port 		    = 3000;
var apiRouter		= require('./routes/api.js');

mongoose.connect('mongodb://localhost/project_four', function(err){
	if(err) throw err
	console.log('Connected to MongoDB')
})

//enable cors
app.use(cors());

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
	console.log('getting index?')
	res.render('index')
})

app.use('/', apiRouter);

app.listen(port);
console.log('Magic is happening on port' + port);

