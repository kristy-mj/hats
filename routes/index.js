var express = require('express')
var router = express.Router()
var knex = require('knex')

var shoppingcart = require('../shoppingcart')
var orderInfo = require('../orderInfo')


// var order = require('order')

router.get('/hatbuilder', function (req, res) {
	res.render('hatbuilder')
})

router.get('/orderSummary', function (req, res) {
	res.render('ordersummary')
})

router.get('/orderInfo', function (req, res) {
	res.render('orderInfo')
})

router.get('/orderConfirm', function (req, res) {
	res.render('orderConfirm')
})

router.get('/hatbuilder', function(req, res, next) {
	shoppingcart.getAll()
	.then(function (data) {
		res.render('shoppingcart', {data: data})
	})
	.catch(function (err) {
		console.log(err)
	})
});


router.post('/orderSummary', function(req, res, next) {
	console.log('shoppingcart', shoppingcart)

	var id = req.body.id
	var brim = req.body.brim
	var body = req.body.body
	var bobble = req.body.bobble

	shoppingcart.createProductOrder(brim, body, bobble)
	.then(function(orderid) { 
		console.log(orderid)
		if (orderid) {
		//	shoppingcart.addProduct(order.id, inputbrim, inputbody, inputbobble)
				res.redirect('/orderSummary?orderid=' + orderid)
		}
    })
    .catch(function (err){
      console.error(err)
	})
})


module.exports = router;
