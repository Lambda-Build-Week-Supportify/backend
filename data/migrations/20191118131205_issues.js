exports.up = function(knex) {
  return knex.schema.createTable("issues", function(issues) {
    issues.increments("issues_id");
    issues.string("priority");
    issues.string("title");
    issues.string("description").notNullable();
    issues.string("equipment");
    issues.string("general_issues");
    issues.string("estimated_cost");
    issues.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("issues");
};
