
exports.seed = function(knex) {
      return knex('customer_favs').insert([
        {business_id: 1, customer_id: 3},
        {business_id: 2, customer_id: 2},
        {business_id: 3, customer_id: 3},
        {business_id: 4, customer_id: 4},
        {business_id: 5, customer_id: 5},
        {business_id: 6, customer_id: 3},
        {business_id: 3, customer_id: 2},
        {business_id: 1, customer_id: 4},
        {business_id: 4, customer_id: 5},
        {business_id: 3, customer_id: 1},
        {business_id: 5, customer_id: 2},
        {business_id: 2, customer_id: 4},
        {business_id: 4, customer_id: 3},
        {business_id: 1, customer_id: 5},
        {business_id: 6, customer_id: 2},
        {business_id: 4, customer_id: 1},
      ]);
};
