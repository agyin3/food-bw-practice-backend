
exports.up = function(knex) {
  return knex.schema.createTable('services', services => {
        services.increments()
        services.string('title')
            .notNullable()
        services.string('description')
            .notNullable()
        services.string('price')
            .notNullable()
        services.integer('business_id')
            .notNullable()
            .references('id')
            .inTable('business_users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('services')
};
