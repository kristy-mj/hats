var express = require('express')
var app = express()

var index = require('./routes/index')
var buildHat = require('./routes/hatbuilder')


app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.render('index')
})

app.get('/hatbuilder', function (req, res) {
	res.render('hatbuilder', buildHat)
})

app.get('/ordersummary', function (req, res) {
	res.render('ordersummary')
})

app.get('/orderInfo', function (req, res) {
	res.render('orderInfo')
})

app.get('/orderConfirm', function (req, res) {
	res.render('orderConfirm')
})

app.listen(3000)