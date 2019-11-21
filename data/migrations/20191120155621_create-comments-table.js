
exports.up = function (knex) {
  // comments table
  return knex.schema.createTable("comments", col => {
    col.increments("comment_id");
    col.string("comment")
      .notNullable();
    col
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    col
      .integer("issues_id")
      .unsigned()
      .notNullable()
      .references("issues_id")
      .inTable("issues")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    col.timestamp('create_at').defaultTo(knex.fn.now())
    col.timestamp('updated_at').defaultTo(knex.fn.now())
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
