var express = require('express')
var router = express.Router()
var knex = require('knex')

var shoppingcart = require('../shoppingcart')

// var order = require('order')


router.get('/hatbuilder', function(req, res, next) {
	shoppingcart.getAll()
	.then(function (data) {
		res.render('shoppingcart', {data: data})
	})
	.catch(function (err) {
		console.log(err)
	})
});



// router.post('/hatbuilder2', function(req, res, next) {
// 	var id = req.body.id
// 	var brim = req.body.id
// 	var body = req.body.body
// 	var bobble = req.body.bobble

// 	order.addOrder()
// 	.then(function(order) {
// 		if (order.id) {
// 			shoppingcart.addProduct(order.id, inputbrim, inputbody, inputbobble)
// 				.then(res.redirect('/orderSummary?orderid=' + order.id))
// 		}
// 	})
// })


// router.get('/search-results', function(req, res, next) {
//   profiles.getAll()
//     .then(function (data) {
//       res.render('search-results', {data: data})
//     })
//     .catch(function (err){
//       console.log(err)
//     })
// });

router.post('/hatbuilder', function(req, res, next) {
	var id = req.body.id
	var brim = req.body.id
	var body = req.body.body
	var bobble = req.body.bobble
	shoppingcart.addProduct(inputbrim, inputbody, inputbobble)
    .then(res.redirect('/orderSummary'))
    .catch(function (err){
      console.error(err)
    })
});

module.exports = router;
