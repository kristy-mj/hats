exports.up = function(knex, Promise) {
	console.log('create table')
	return knex.schema.createTableIfNotExists('orderInfo', function(table){
		table.increments('id').primary()
		table.string('name')
		table.string('address')
		table.string('email')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('orderInfo').then(function () {
		console.log('orderInfo table was dropped')
	})
};