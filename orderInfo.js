#!/usr/bin/env node
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/dev.sqlite3'
  },
  useNullAsDefault: true
});

function createOrder () {
  return knex('orderInfo').insert({
    name: "NOT_SET"
  });
}

function addOrderId (unique_id) {
  return knex('orderInfo').insert({
    unique_id: unique_id
  });
}

function addUserInfo (name, address, email) {
  return knex('orderInfo').insert({
    name: name,
    address: address,
    email: email
  });
}

function listInfo (user) {
  orderInfo.forEach(function (user) { 
    console.log(user) 
  })
}

function getAll () {
  return knex.select('*').from('orderInfo') 
}

function updateOrder(id, name, address, email) {
  return knex('orderInfo')
         .where('id', id)
         .update({
          name: name,
          address: address,
          email: email
         })
}

// function getOrder () {
//   return knex('orderInfo')
//          .where('unique_id', id)
//}

function removeOrder (id) {
  return knex('orderInfo')
         .where('id', id)
         .del()
}

function logError (err) {
  console.log('Error: ', err)
}
function closeDB () {
  knex.destroy()
}

module.exports = {
  addOrderId: addOrderId,
  addUserInfo: addUserInfo,
  removeOrder: removeOrder,
  createOrder: createOrder
}

// var cmd = process.argv[2]
// var id = process.argv[3]
// var name = process.argv[4]
// var address = process.argv[5]
// var email = process.argv[6]

// switch (cmd) {
//   case 'list':
//     getAll()
//       .then(listInfo)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'add':
//     addOrderId(id)
//       .then(getAll)
//       // .then(listInfo)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'create':
//     createOrder()
//       .then(getAll)
//       // .then(listInfo)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'update':
//     updateOrder(id, name, address, email)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   case 'remove':
//     removeOrder(id)
//       .then(getAll)
//       // .then(listInfo)
//       .catch(logError)
//       .finally(closeDB)
//     break
//   default:
//     console.log('no matched cases')
//     closeDB()
//     break
// }