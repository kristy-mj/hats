exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.table('shoppingcart', function(table){
  		table.integer('unique_id')
  	}),
  	knex.schema.table('orderInfo', function(table){
  		table.integer('unique_id')
  	})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.table('shoppingcart', function(table){
  		table.integer('unique_id')
  	}),
  	knex.schema.table('orderInfo', function(table){
  		table.integer('unique_id')
  	})
  ])
};