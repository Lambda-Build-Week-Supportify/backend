exports.up = function(knex) {
  return knex.schema.createTable("issues", function(issues) {
    issues.increments();
    issues.string("priority");
    issues.string("title");
    issues.string("description").notNullable();
    issues.string("equipment");
    issues.string("general issues");
    issues.string("estimated cost");
    issues.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("issues");
};
