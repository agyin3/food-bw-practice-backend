
exports.seed = function(knex) {
      return knex('customers').insert([
        {username: "Test1", password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", email: "test1@tes.com", first_name: "Test1"},
        {username: "Test2", password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", email: "test2@tes.com", first_name: "Test2"},
        {username: "Test3", password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", email: "test3@tes.com", first_name: "Test3"},
        {username: "Test4", password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", email: "test4@tes.com", first_name: "Test4"},
        {username: "Test5", password: "$2a$08$JGT5JHSqPCoLRzv4xmqedO1yAUZH8nUtz7vUfc/7ihJLMO1eR.x9q", email: "test5@tes.com", first_name: "Test5"},
      ]);
};
