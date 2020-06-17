
exports.seed = function(knex) {
      return knex('business_users').insert([
        {username: 'Buddy', password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", business_name: "Buddy Services", email: "buddy@test.com"},
        {username: 'Marta', password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", business_name: "Marta Services", email: "marta@test.com"},
        {username: 'Jason', password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", business_name: "Jason Services", email: "jason@test.com"},
        {username: 'Francisco', password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", business_name: "Francisco Services", email: "francisco@test.com"},
        {username: 'Barbara', password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", business_name: "Barbara Services", email: "barbara@test.com"},
        {username: 'Jorge', password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", business_name: "Jorge Services", email: "jorge@test.com"},
      ]);
};
