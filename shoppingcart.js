#!/usr/bin/env node
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  },
  useNullAsDefault: true
});


var orderInfo = require('./orderInfo');

function listHats (hats) {
  hats.forEach(function (hat) { 
    console.log(hat) 
  })
}

function getAll () {
  return knex.select('*').from('shoppingcart') 
}

function createOrder () {
  return knex('orderInfo').insert({
    name: "NOT_SET"
  });
}

function getOrderProducts (unique_id) {
  return knex('shoppingcart')
         .where('unique_id', unique_id)
}

function createProductOrder (brim, body, bobble) {
  return createOrder().then(function(order){
    // console.log(order[0])
    // if (order && order[0]) {
      return knex('shoppingcart').insert({
        brim: brim,
        body: body,
        bobble: bobble,
        unique_id: order[0]
      })
      .then(function(){
        return order[0];
      })
    // }
  })
}

function addProduct (brim, body, bobble) {
  return knex('shoppingcart').insert({
     brim: brim,
     body: body,
     bobble: bobble
  });
}

function removeProduct (hat) {
  return knex('shoppingcart')
         .where('id', hat)
         .del()
}
function logError (err) {
  console.log('Error: ', err)
}
function closeDB () {
  knex.destroy()
}

module.exports = {
  addProduct: addProduct,
  removeProduct: removeProduct,
  createProductOrder: createProductOrder,
  getAll: getAll
}

// var cmd = process.argv[2]
// var id = process.argv[3]
// var brim = process.argv[4]
// var body = process.argv[5]
// var bobble = process.argv[6]

// switch (cmd) {
//   case 'list':
//     getAll()
//       .then(listHats)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'add':
//     addProduct(id, brim, body, bobble)
//       .then(getAll)
//       .then(listHats)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'remove':
//     removeProduct(id)
//       .then(getAll)
//       .then(listHats)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'order':
//     createProductOrder(brim, body, bobble)
//     .catch(logError)
//     .finally(closeDB)
//     break 
//   case 'getCart':
//     getOrderProducts(id)
//     .then ((data) => {
//       console.log(data)
//     })
//     .catch(logError)
//     .finally(closeDB)
//   default:
//     console.log('no matched cases')
//     closeDB()
//     break
// }
