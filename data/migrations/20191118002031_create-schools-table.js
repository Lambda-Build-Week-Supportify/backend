
exports.up = function (knex) {
  return knex.schema.createTable('schools', col => {
    col.increments('school_id')

    col.varchar('school_name', 255)
      .notNullable()
      .unique()
    col.integer('num_issues')
    col.integer('num_students')
    col.float('est_costs')
    col.varchar('school_street', 255)
      .notNullable();
    col.varchar('school_city', 255)
      .notNullable()
    col.varchar('school_state', 255)
      .notNullable();
    col.text('post_code', 255)
      .notNullable();
    col.text('phone', 50)
      .notNullable();
    col.varchar('grade_level', 255);
    col.varchar('about', 500);
    col.timestamp('create_at').defaultTo(knex.fn.now())
    col.timestamp('updated_at').defaultTo(knex.fn.now())
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('schools')
};
