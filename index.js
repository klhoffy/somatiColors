var express 		= require('express');
var app			    = express();
var mongoose		= require('mongoose');
var morgan 			= require('morgan');
var bodyParser 	    = require('body-parser');
var path		   	= require('path');
var cors            = require('cors');
var port 		    = 3000;
var apiRouter		= require('./api/routes/api.js');

mongoose.connect('mongodb://localhost/project_four', function(err){
	if(err) throw err
	console.log('Connected to MongoDB')
})

// set up middleware
app.use(cors());
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))

app.use('/api', apiRouter);

app.listen(port);
console.log('Magic is happening on port' + port);