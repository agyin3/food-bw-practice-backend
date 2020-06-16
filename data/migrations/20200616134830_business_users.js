
exports.up = function(knex) {
  return knex.schema.createTable('business_users', table => {
        table.increments()
        table.string('username')
            .notNullable()
            .unique()
        table.string('password')
            .notNullable()
        table.string('email')
            .notNullable()
            .unique()
        table.string('business_name')
        table.string('first_name')
        table.string('last_name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('business_users')
};
