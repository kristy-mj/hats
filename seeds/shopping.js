
exports.seed = function(knex, Promise) {
  return knex('shoppingcart').del()
    .then(function () {
      return Promise.all([
        knex('shoppingcart').insert({id: 1, brim: 'Grey', body: 'Dash', bobble: 'Yellow'}),
        knex('shoppingcart').insert({id: 2, brim: 'Black', body: 'Plain', bobble: 'Orange'}),
        knex('shoppingcart').insert({id: 3, brim: 'White', body: 'Stripe', bobble: 'Pink'})
      ]);
    });
};
