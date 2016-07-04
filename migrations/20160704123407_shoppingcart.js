exports.up = function(knex, Promise) {
	console.log('create table')
	return knex.schema.createTableIfNotExists('shoppingcart', function(table){
		table.increments('id').primary()
		table.string('brim')
		table.string('body')
		table.string('bobble')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('shoppingcart').then(function () {
		console.log('shoppingcart table was dropped')
	})
};
