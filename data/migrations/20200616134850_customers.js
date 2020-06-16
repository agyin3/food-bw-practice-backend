
exports.up = function(knex) {
  return knex.schema.createTable('customers', customer => {
        customer.increments()
        customer.string('username')
            .notNullable()
            .unique()
        customer.string('password')
            .notNullable()
        customer.string('email')
            .notNullable()
            .unique()
        customer.string('first_name')
            .notNullable()
        customer.string('last_name')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers')
};
