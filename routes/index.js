var express = require('express')
var router = express.Router()
var knex = require('knex')

var shoppingcart = require('../shoppingcart')
var orderInfo = require('../orderInfo')

// var order = require('order')

router.get('/hatbuilder', function (req, res) {
	res.render('hatbuilder', {title: "The title should be here"})
})

router.get('/orderConfirm', function (req, res) {
	res.render('orderConfirm')
})

// router.get('/hatbuilder', function(req, res, next) {
// 	shoppingcart.getAll()
// 	.then(function (data) {
// 		res.render('shoppingcart', {data: data})
// 	})
// 	.catch(function (err) {
// 		console.log(err)
// 	})
// });


router.get('/orderSummary', function (req, res) {
		shoppingcart.getAll()
		.then(function (data) {
			res.render('orderSummary', {data: data})
		})
		.catch(function (err) {
			console.error(err)
		})
})

router.post('/orderSummary', function(req, res) {
	// console.log('shoppingcart', shoppingcart)
	var id = req.body.id
	var brim = req.body.brim
	var body = req.body.body
	var bobble = req.body.bobble

	shoppingcart.addProduct(brim, body, bobble)
	.then(res.redirect('/orderSummary'))
  .catch(function (err){
  	console.error(err)
	})
})

router.get('/orderInfo', function (req, res) {
		orderInfo.getAll()
		.then(function (info) {
			res.render('orderInfo', {info: info})
		})
		.catch(function (err) {
			console.error(err)
		})
})

router.post('/orderConfirm', function (req, res) {
	var name = req.body.name
	var address = req.body.address
	var email = req.body.email

	orderInfo.addUserInfo(name, address, email)
	.then(res.redirect('/orderConfirm'))
	.catch(function (err) {
		console.error(err)
	})
})
module.exports = router;
