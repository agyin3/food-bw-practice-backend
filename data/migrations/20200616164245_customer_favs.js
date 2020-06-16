
exports.up = function(knex) {
  return knex.schema.createTable('customer_favs', favs => {
        favs.integer('business_id')
            .notNullable()
            .references('id')
            .inTable('business_users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        favs.integer('customer_id')
            .notNullable()
            .references('id')
            .inTable('customers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customer_favs')
};
