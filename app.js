var express = require('express')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.use('/', index);
app.use('/public', express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.render('index')
})

app.listen(3000)