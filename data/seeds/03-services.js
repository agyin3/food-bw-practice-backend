
exports.seed = function(knex) {
      return knex('services').insert([
        {title: "Testing1", description: "Test services", price: "99999", business_id: 2},
        {title: "Testing2", description: "Test services", price: "99999", business_id: 2},
        {title: "Testing3", description: "Test services", price: "99999", business_id: 3},
        {title: "Testing4", description: "Test services", price: "99999", business_id: 4},
        {title: "Testing5", description: "Test services", price: "99999", business_id: 5},
        {title: "Testing6", description: "Test services", price: "99999", business_id: 4},
        {title: "Testing7", description: "Test services", price: "99999", business_id: 6},
        {title: "Testing8", description: "Test services", price: "99999", business_id: 3},
        {title: "Testing9", description: "Test services", price: "99999", business_id: 4},
        {title: "Testing10", description: "Test services", price: "99999", business_id: 5},
      ]);
};
