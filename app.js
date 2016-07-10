var express = require('express')
var app = express()

var index = require('./routes/index')


app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')


app.use('/public', express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.render('index')
})

app.get('/hatbuilder', function (req, res) {
	res.render('hatbuilder')
})

app.get('/orderSummary', function (req, res) {
	res.render('ordersummary')
})

app.get('/orderInfo', function (req, res) {
	res.render('orderInfo')
})

app.get('/orderConfirm', function (req, res) {
	res.render('orderConfirm')
})

app.listen(3000)